/*
Frontend Co-related Query
Retrieve farmer name ,tool name with respect to toolquantity with farmer name as i/p.
i/p: farmer name
tool anme and hoe much quantity he is using 
*/
use farmmanagement;
select farmerName,toolname,toolquantity
from farmers join farmtools using (farmerID)
where exists (select * from farmers where farmerName = "Neeraj" and farmers.farmerID=farmtools.farmerID);




