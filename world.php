<?php
mysql_connect("0.0.0.0", 
"chanzrobe"
);
mysql_select_db("world");

$LOOKUP = $_REQUEST['lookup'];

# execute a SQL query on the database
$results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
print $results;
if (mysql_num_rows($result) > 0)
{
   $doc = new_xmldoc("1.0"); // create DomDocument object
   
   $root = $doc->add_root("countrydata"); //add root node

  while ($row = mysql_fetch_array($results)){ //loop through each country
      $country = $root->new_child("country", "");     // create item node
      
      // attach name and ruler as children of item node
      $record->new_child("name", $row["name"]);
      $record->new_child("ruler", $row["head_of_state"]);
   }

  // print the tree 
  echo $doc->dumpmem();
}
?>

