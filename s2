/*Simple Query 1

Query to dispaly the farmers with their farm produce quantity in descending order
using order by class
*/

use farmmanagement;
select farmerName ,sum(toolquantity) as quantity
from farmers
join farmtools using (farmerID)
group by farmerID
order by quantity desc;