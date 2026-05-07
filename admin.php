<?php
// Database connection
$host = 'localhost';
$dbname = 'glowhub';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Sample admin dashboard structure
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: admin_login.php');
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>GlowHub Admin Panel</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <div class="admin-dashboard">
        <nav class="admin-sidebar">
            <h2><i class="fas fa-spa"></i> GlowHub Admin</h2>
            <ul>
                <li><a href="#users"><i class="fas fa-users"></i> Users</a></li>
                <li><a href="#orders"><i class="fas fa-shopping-cart"></i> Orders</a></li>
                <li><a href="#products"><i class="fas fa-box"></i> Products</a></li>
                <li><a href="#inventory"><i class="fas fa-warehouse"></i> Inventory</a></li>
                <li><a href="#emails"><i class="fas fa-envelope"></i> Email Logs</a></li>
            </ul>
        </nav>
        
        <main class="admin-main">
            <!-- Dashboard Stats -->
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Total Orders</h3>
                    <div class="stat-number"><?php echo $pdo->query("SELECT COUNT(*) FROM orders")->fetchColumn(); ?></div>
                </div>
                <!-- Add more stats -->
            </div>
        </main>
    </div>
</body>
</html>