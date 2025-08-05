# 🐞 Bug Report: S9P-10

**[Link](https://carmitdwayne-1739119879743.atlassian.net/browse/S9P-10)** to view in Jira

**Title:**  
*When using the DELETE method **"Removing a Courier"** endpoint (`/api/v1/courier/:id`), with response code: `HTTP/1.1 200 OK { ok: true }` and **no "id" parameter**, the incorrect error message is displayed.*


|    |    |    |
|---------------------------------------|---------------------|----|
| **Created:**  *08/Mar/2025*<br> |      |  **Assignee:** *Unassigned* <br> |
| **Updated:** *08/Mar/2025*<br>   |    | **Resolution:** 			*Unresolved* |
| **Status:**   			*To Do*<br>   |    | **Components:** 			*None*<br> |
| **Type:**     	  	   		*Bug*  |    | **Affects Versions:** *None*<br>  |
| **Project:** *Sprint 9 Project*  |    | **Affects Versions:** *None*<br> |
| **Priority:**  		*Medium*<br>   |   | **Fix Versions:** 		*None*<br> |
| **Reporter:**		*Dwayne Brown*    |    

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
## 💻 Environment
**OS:** *Windows 10 Home 22H2*<br>
**Remote Server:** *username@containerhub.tripleten-services.com*<br>
**Port:** *4554*<br>
**Database:** *PostgreSQL 15.2*<br>
**API Client:** *Postman (Web version)*<br>
