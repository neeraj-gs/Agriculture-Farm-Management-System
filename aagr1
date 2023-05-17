/*Aggregate function 2

Query to display harvested id and farmProduce whose average is greater than 2kg
using  aggregate function with group by and having class
*/

use farmmanagement;
Select harvesterid, AVG(farmproducebasketquantity) as Averagequantityofproduce
from farmproduce GROUP BY harvesterid
having avg(farmproducebasketquantity) >= 2;