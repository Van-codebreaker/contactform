<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email_acc = $_POST['email_acc']
$radio = $_POST['radio'];
$textarea_msg = $_POST['textarea_msg'];
$chck = $_POST['chck'];

if (!empty($firstname) || !empty($lastname) || !empty($email_acc) || !empty($radio) || !empty($textarea_msg) || !empty($chck)) {
    # codee.....
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "contact";

    #connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('connect error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else {
        $SELECT = "$SELECT email From contact where email = ? Limit 1";
        $INSERT = "INSERT Into contact (firstname, lastname, email_acc, radio, textarea_msg, chck values (?, ?, ?, ?, ?, ?)";

        #prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store->num_rows;

        if ($rnum==0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $sstmt->bind_param("ssssii", $firstname, $lastname,$email_acc, $radio, $textarea_msg, $chck);
            $stmt->execute();
            echo "New record inserted successfully";
        } else {
            echo "Someone already that using email!";
        }
        $stmt->close();
        $conn->close();
    }

 } else {
    echo "all fieds are required!";
    die();
}
?>

