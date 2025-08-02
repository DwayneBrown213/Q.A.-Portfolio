# 🐞 Bug Report: S9P-10

**Title:**  
When using the DELETE method **"Removing a Courier"** endpoint (`/api/v1/courier/:id`), with response code: `HTTP/1.1 200 OK { ok: true }` and **no "id" parameter**, the incorrect error message is displayed.

---

**Created:**  *08/Mar/2025*<br>
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
1. Send a DELETE request to `/api/v1/courier/` without providing the `:id` parameter.
2. Observe the returned message.

### **Expected Result:**  
```json
HTTP/1.1 400 Bad Request  
{ "message": "Not enough data to remove the courier" }
```
### **Actual Result:**  
```json
HTTP/1.1 404 Not Found
{ "message": "Not Found."} 
```
