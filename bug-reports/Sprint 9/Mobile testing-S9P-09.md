# 🐞 Bug Report: S9P-09
**[Link](https://carmitdwayne-1739119879743.atlassian.net/browse/S9P-9)** to view in Jira

**Title:**<br>
*When the is no internet and certain active button are pressed, the "No Internet access" notification is not displayed.*

|    |    |    |
|---------------------------------------|---------------------|----|
| **Created:**  *07/Mar/25*<br> |      |  **Assignee:** *Unassigned* <br> |
| **Updated:** *07/Mar/25*<br>   |    | **Resolution:** 			*Unresolved* |
| **Status:**   			*To Do*<br>   |    | **Components:** 			*None*<br> |
| **Type:**     	  	   		*Bug*  |    | **Affects Versions:** *None*<br>  |
| **Project:** *Sprint 9 Project*  |    | **Affects Versions:** *None*<br> |
| **Priority:**  		*Medium*<br>   |   | **Fix Versions:** 		*None*<br> |
| **Reporter:**		*Dwayne Brown*    |   

---

## 📝 Description

### **Precondition:**  
 Logged in to the app as a courier; An order is accepted and exists in the "My orders" tab; the device’s internet is turned off.

### **Steps to Reproduce:**
1. Download and install Urban Scooter mobile app APK.
2. Create courier login with a POST request using URL + /api/v1/courier, and valid request body.
3. Create an order with a POST request using URL + /api/v1/orders, and valid request body.
4. Configure the mobile app to interact with the backend, by clicking the "?" icon in the lower-right corner of the home screen, and entering a valid URL to the API.
5. Login as courier on the app.
6. Accept the order that was created from the “All orders” list.
7. Set the device's wifi and data internet off.
  Expected results: "No Internet Access"- pop-up is displayed.
  Actual results: Notification not displayed.


### **Expected Result:**  
***"No Internet Access"***  - pop-up is displayed.

### **Actual Result:**  
*Notification not displayed.*

