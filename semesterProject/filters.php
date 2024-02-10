<!DOCTYPE html>
<html lang="en">
<head>
    <title>Customize Filters</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>

    <!-- theme -->
    <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/pepper-grinder/jquery-ui.css"/>
   
    <!-- include script source to CDN location of most recent jQuery vers -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- load jquery ui -->
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</head>
<body>
    <!-- Header (contains page title) -->
    <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/" class="header-link">
        <div class="header">
            <h1>Custom Eats</h1>
        </div>
    </a>

    <!-- Navigation bar, used div to make it responsive -->
    <nav>
        <div class="navbar">
            <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/about.html">About Us</a>
            <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/filters.php">Customize Filters</a>
            <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/find_restaurants.html">Find Restaurants</a>
            <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/order.php">Order Now</a>
            <a href="http://elvis.rowan.edu/~phamsa68/WebProgramming/SemesterProject/info.html">Food Info</a>
        </div>
    </nav>

    <!-- welcome to this page -->
    <div class="colored-bg">
        <h2>Customize Filters</h2>
        <p>
            Custom Eats' has filters where you can fill out what you can't eat,
            and when they're saved, they are applied when browsing a restuarant menu.
        </p>
        <p>
            Filters consist of two categories: Ingredient and
            Nutritional Value. Both have specific instructions on how to use
            them in their respective boxes. For both, please remember that
            you must click the "save" button at the bottom of each boxes to save
            them.
        </p>
        <p class="red-item">
            <b>DISCLAIMER:</b> Checking this doesn't guarantee that every menu item will
            have the filter applied, since it depends if the restaurant discloses that
            information to this site. A warning will be shown if the ingredients and/or 
            nutritional value aren't disclosed.
        </p>
    </div>

    <!-- contains forms -->
    <div class="forms">
        <!-- contains all the ingredients
            - so far, only contains common allergens/ingredients
            that are often avoided, like red meat
            - the intended effect is clicking a checkbox results in clicking
            the children checkboxes beneath it, this functionality isn't
            implemented yet -->
        <form action="scripts/filters2.php" method="POST">
            <!-- form a div for the ingredients side for flexboxing/responsive design -->
            <div class="form-box">
                <h3 class="center-title">Ingredient Filtering</h3>
                <p>
                    Checking a checkbox will add that ingredient to filter out menu items
                    containing that ingredient. Additionally, 
                    these are "hierarchial" checkboxes, where clicking a checkbox that has
                    other checkboxes indented under it also checks those as well.
                </p>

                <!-- hierarchial checkboxes -->
                <ul>
                    <li class="ingredients"><label><input type="checkbox"/><b> All Ingredients</b></label>
                    <ul class="ingredients">
                        <!-- proteins start -->
                        <li class="space"><label class="ingredient-category"><input type="checkbox"/> Proteins</label>
                        <ul class="ingredients">
                            <!-- meat start -->
                            <li class="space"><label class="ingredient-sub-category"><input type="checkbox"/> Meats</label>
                            <ul class="ingredients">
                                <li class="ingredient-item"><label><input type="checkbox" name="chicken"/> Chicken</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="pork"/> Pork</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="beef"/> Beef</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="lamb"/> Lamb</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="turkey"/> Turkey</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="duck"/> Duck</label></li>
                            </ul>
                            </li>
                            <!-- meat end, seafood start -->
                            <li class="space"><label class="ingredient-sub-category"><input type="checkbox"/> Seafood</label>
                            <ul class="ingredients">
                                <li class="ingredient-item"><label><input type="checkbox" name="fish"/> Fish</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="shellfish"/> Shellfish</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="crustaceans"/> Crustaceans</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="molluscs"/> Molluscs</label></li>
                            </ul>
                            </li>
                            <!-- seafood end, vegetarian start -->
                            <li class="space"><label class="ingredient-sub-category"><input type="checkbox"/> Vegetarian</label>
                            <ul class="ingredients">
                                <li class="ingredient-item"><label><input type="checkbox" name="eggs"/> Eggs</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="tofu"/> Tofu</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="beans"/> Beans</label></li>
                            </ul>
                            </li>
                            <!-- vegetarian end, nuts begin -->
                            <li class="space"><label class="ingredient-sub-category"><input type="checkbox"/> Nuts</label>
                            <ul class="ingredients">
                                <li class="ingredient-item"><label><input type="checkbox" name="peanuts"/> Peanuts</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="almonds"/> Almonds</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="cashews"/> Cashews</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="hazelnuts"/> Hazelnuts</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="pistachios"/> Pistachios</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="walnuts"/> Walnuts</label></li>
                                <li class="ingredient-item"><label><input type="checkbox" name="pecans"/> Pecans</label></li>
                            </ul>
                            </li>
                            <!-- nuts end -->
                        </ul>
                        </li>
                        <!-- proteins end, gluten begins -->
                        <li class="space"><label class="ingredient-category"><input type="checkbox"/> Gluten</label>
                        <ul class="ingredients">
                            <li class="ingredient-item"><label><input type="checkbox" name="wheat"/> Wheat</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="rye"/> Rye</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="barley"/> Barley</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="oats"/> Oats</label></li>
                        </ul>
                        </li>
                        <!-- gluten ends, dairy begins -->
                        <li class="space"><label class="ingredient-category"><input type="checkbox"/> Dairy</label>
                        <ul class="ingredients">
                            <li class="ingredient-item"><label><input type="checkbox" name="milk"/> Milk</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="cheese"/> Cheese</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="butter"/> Butter</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="cream"/> Cream</label></li>
                        </ul>
                        </li>
                        <!-- dairy ends, other begins -->
                        <li class="space"><label class="ingredient-category"><input type="checkbox"/> Other</label>
                        <ul class="ingredients">
                            <li class="ingredient-item"><label><input type="checkbox" name="sesame"/> Sesame</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="soy"/> Soy</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="citrus"/> Citrus</label></li>
                            <li class="ingredient-item"><label><input type="checkbox" name="msg"/> MSG (Monosodium Glutamate)</label></li>
                        </ul>
                        </li>
                        <!-- other ends -->
                    </ul>
                    </li>
                </ul>
                  
                <div class="submit-button">
                    <input type="submit" name="ingredient-save-button" value="Save"/>
                </div>
            </div>
        </form>
        <br/>

        <form method="POST">
            <!-- another form for the nutritional values -->
            <div class="form-box">
                <h3 class="center-title">Nutritional Value Filtering</h3>
                <p>
                    Insert the maximum amount you can take for each nutritional value.
                    Only numbers are able to be input in the boxes. Their default value is -1, meaning
                    that you do not care about how much of, for example, sodium is in your meal.
                    Decimals aren't allowed. The units are in grams (g) except for calories. Each text box
                    MUST have a number in it.
                </p>
                
                <!-- calories -->
                <label class="margin-label">Calories: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- sodium -->
                <label class="margin-label">Sodium: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- sugar -->
                <label class="margin-label">Sugar: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- cholesterol -->
                <label class="margin-label">Cholesterol: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- carbohydrates -->
                <label class="margin-label">Carbohydrates: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- saturated fat -->
                <label class="margin-label">Saturated Fat: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <!-- trans fat -->
                <label class="margin-label">Trans Fat: </label>
                <input type="number" value="-1" min="-1" step="1" required/>
                <br/>
                <br/>

                <br/>
                <div class="submit-button">
                    <input type="submit" value="Save"/>
                </div>
            </div>
        </form>
    </div>

    <!-- Footer (contains "copyright" info) -->
    <div class="footer">
        <h5>All rights reserved, 2022 by Sarah Pham</h5>
    </div>

    <script src="scripts/checkbox2.js"></script>
</body>
</html>
