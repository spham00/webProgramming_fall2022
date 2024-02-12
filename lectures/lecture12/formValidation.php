<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP form validation</title>
</head>
<body>
    
    <h2>Student Registration Form</h2>
    <form method="POST" action="index4.php">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Major:</td>
                <td>
                    <input type="radio" name="major" value="CS"/>CS
                    <input type="radio" name="major" value="Anthro"/>Anthropology
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="submit" value="Register!"/>
                </td>
            </tr>
        </table>
    </form>

    <h2>Your given details are below:</h2><br/>CS<br/></body>
</html>
