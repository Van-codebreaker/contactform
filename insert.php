<?php
# codee.....
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "dbcontactform";
    
#connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    
if ($conn->connect_error) {
    die("Connection Failed: " .$conn->connect_error);
}

#insert into database
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email_acc = $_POST['email_acc']
$radio = $_POST['radio'];
$textarea_msg = $_POST['textarea_msg'];
$chck = $_POST['chck'];

$sql = "INSERT INTO tbcontact (firstname, lastname, email, querytype, msgs, contactteam) VALUES ("$firstname", "$lastname", "$email_acc", "$radio", "$textarea_msg", "$chck")";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error : " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

