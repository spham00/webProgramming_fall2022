<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sending data with forms</title>
</head>
<body>
    <h3>Sign Up Form</h3>
    <!--
        Action = where do we want to process the information when we hit submit
            Here, we're sending it back to itself
            Note: it may be different PHP file to process

        Method (HTTP verbs) =
            GET: grabs info from form and passes into URL in form of an array
                - Key value pairs   - Name of input field is the key
            POST: send info from form to the processing file
    -->
    <form action="index2.php" method="POST">
        <!-- when we submit, the query string is added to end of web address
            ex. index.php?username=TEST if we put in TEST (applicable for GET) -->
        <input type="text" placeholder="Enter your name"
            name="username"/>
        <br/>
        <input type="email" placeholder="Enter your email"
            name="email"/>
        <br/>
        <input type="password" placeholder="Enter your password"
            name="password"/>
        <br/>
        <input type="submit" name="submit-button"/>
    </form>

    <br/></body>
</html>
