<!DOCTYPE html>
<html lang="en">
<head>
    <title>A Simple Calculator Program in PHP</title>
</head>

<!-- pulling, super global; ['input name'] -->

<body>
    <h1>PHP calculator program</h1>
    <!-- posting to the PHP form -->
    <form action="" method="POST" id="calc-form">
        <p>
            <!-- value saves the input first_num -->
            <input type="number" name="first_num" id="first_num"
                required="required" value=""/>
            <b>First number</b>
        </p>
        <p>
            <input type="number" name="second_num" id="second_num"
                required="required" value=""/>
            <b>Second number</b>
        </p>
        <p>
            <input name="result" readonly="readonly" value=""/>
            <b>Result</b>
        </p>
        <input type="submit" name="operator" value="Add"/>
        <input type="submit" name="operator" value="Subtract"/>
    </form>
</body>
</html>
