# 🐞 Bug Report: S9P-09
**[Link](https://carmitdwayne-1739119879743.atlassian.net/browse/S9P-2)** to view in Jira

**Title:**<br>
*When 2hrs are left to complete the order, no notification is displayed on the moblie app.*

|    |    |    |
|---------------------------------------|---------------------|----|
| **Created:**  *12/Feb/25*<br> |      |  **Assignee:** *Unassigned* <br> |
| **Updated:** *12/Feb/25*<br>   |    | **Resolution:** 			*Unresolved* |
| **Status:**   			*To Do*<br>   |    | **Components:** 			*None*<br> |
| **Type:**     	  	   		*Bug*  |    | **Affects Versions:** *None*<br>  |
| **Project:** *Sprint 9 Project*  |    | **Affects Versions:** *None*<br> |
| **Priority:**  		*Medium*<br>   |   | **Fix Versions:** 		*None*<br> |
| **Reporter:**		*Dwayne Brown*    |   

---

## 📝 Description

### **Precondition:**  
   - Logged in to the app as a courier;
   - An order is accepted and exists in the "My orders" tab;
   - Device's time is set to after 9:59pm.
### **Steps to Reproduce:**
1. Download and install Urban Scooter mobile app APK.
2. Create courier login with a POST request using URL + /api/v1/courier, and valid request body.
3. Create an order with a POST request using URL + /api/v1/orders, and valid request body.
4. Set the devices time to a few minutes after 9:59pm.
5. Configure the mobile app to interact with the backend, by clicking the "?" icon in the lower-right corner of the home screen, and entering a valid URL to the API.
6. Login as courier on the app.
7. Accept the order that was created from the “All orders” list.



### **Expected Result:**  
***"2 hours until the end of the order"***  - notification is displayed.

### **Actual Result:**  
*Notification not displayed.*

## 💻 Environment
**OS:** *Windows 10 Home 22H2*<br>
**Remote Server:** *username@containerhub.tripleten-services.com*<br>
**Port:** *4554*<br>
**Mobile App:** *Urban Scooter apk  version 1.0*<br>
**Emulator:** *Android Studio Ladybug | 2024.2.1
               Build #AI-242.21829.142.2421.12409432, built on September 24, 2024*<br>
**API Client:** *Postman (Web version)*
