# 🐞 Bug Report: S9P-10
**[Link](https://carmitdwayne-1739119879743.atlassian.net/browse/S9P-1)** to view in Jira

**Title:**<br>
*When using the DELETE method "Removing a Courier" endpoint(/api/v1/courier/:id, with response code: HTTP/1.1 200 OK { ok: true }), it doesn't remove associated Orders from the database.*

---

**Created:**  *09/Feb/25*<br>
**Updated:** *08/Mar/2025*<br>
**Status:**   				*To Do*<br> 
**Type:**     				*Bug*  
**Project:**					*Sprint 9 Project*  
**Priority:** 				*Medium*<br>
**Reporter:** 				*Dwayne Brown*  
**Assignee:** 				*Unassigned* <br>
**Resolution:** 			*Unresolved*  
**Components:** 			*None*<br>
**Affects Versions:** *None*<br> 
**Fix Versions:** 		*None*<br>

---

## 📝 Description

### **Precondition:**  
After starting the server, log into the API database.

### **Steps to Reproduce:**
1. Create courier login with a POST request using URL + /api/v1/courier, and valid request body.
2. Create an order with a POST request using URL + /api/v1/orders, and valid request body.
3. Accept the order with a PUT request using URL + /api/v1/orders/accept/:id, and the same id as the courier created in the request body.
4. Delete the courier with a DELETE request using URL + /api/v1/courier/:id, and the same id as the courier created in the request body.
5. Access the URL's API, and call the "Couriers Table" , and confirm the courier login is deleted.
6. Call the "Orders Table", and confirm the associated order is deleted.

### **Expected Result:**  
```json
HTTP/1.1 200 OK
{ ok: true }

Both courier info and associated orders deleted.
```
When using the "Removing a courier" endpoint to delete the courier's info, from the API’s database, linked orders from the respective courier are not deleted.
### **Actual Result:**  
```json
HTTP/1.1 200 OK
{ ok: true } 
```
The courier info is delete from couriers table but associated orders still remain in Orders table.
