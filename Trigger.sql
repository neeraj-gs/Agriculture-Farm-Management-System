/*On delete Trigger
This trigger function is activated once any row from farmers talbe is deleted 
and the deleted record is stored in the new table deleted_farmers
*/


use farmmanagement;
delimiter $$
create trigger farmer_delete
after delete on farmers
for each row
begin
	insert into deleted_farmers values(old.farmerID,old.farmerName, CONCAT('The Deleted Record ',old.farmerId,' ',old.farmerName));
end;



