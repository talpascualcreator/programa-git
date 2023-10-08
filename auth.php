
<?php
// Archivo de configuración
define('DB_HOST', $_ENV['localhost']);
define('DB_USER', $_ENV['root']);
define('DB_PASS', $_ENV['1234']);
define('DB_NAME', $_ENV['veredas']);

// Conexión a la BD 
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Sanitización y validación
$usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

if(!empty($usuario) && !empty($password)){

  // Consulta preparada
  $sql = "SELECT id, nombre, password FROM usuarios WHERE nombre = ?";
  $stmt = $db->prepare($sql);
  $stmt->bind_param("s", $usuario);
  $stmt->execute();

  if($user = $stmt->get_result()->fetch_assoc()) {
   
    // Verificar contraseña hash
    if(password_verify($password, $user['password'])){
      
      // Iniciar sesión
      session_start();
      $_SESSION['user_id'] = $user['id'];
      header('Location: /home');

    } else {
      $error = "Contraseña inválida";
    }

  } else {
     $error = "Usuario no encontrado";
  }

} else {
  $error = "Ingrese usuario y contraseña";
}
?>



