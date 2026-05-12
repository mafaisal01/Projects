#### Cookies in NodeJS

Server make the token.

Server can the send the token to the user through `Cookies` and `Response`.

#### Using Browser - auto
Browser stores the cookies.

We can use the cookie to validate the user.

The server makes the cookies for the domain to which those cookies belong.(Cookies are domain specific.)

We can specify domain to the cookie.Which domain can acess that cookie.

We can also specify the expiration of the cookie.

```javascript 
res.cookie("uid", token , {
    domain : "ayushk.dev" // ayushk.dev can access 

    domain : ".ayushk.dev" // blog.ayushk.dev can access 
    //app.ayushk.dev also can access
    
})
```

It is only limited to the browser.

#### Using Header - json

Bearer authentication is also called as token authentication. 
It is an `HTTP auth`.

```javascript
 Header{
    Authorization : Bearer <token>
 }

```

Server reads the header and removes the bearer and takes the token to validate the user.


---


#### Cookies 

| **Topic**              | **Details**                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**         | Small text files stored by a website on a user’s device to remember information and track activity. Cookies help identify users and customize web experiences.                                                                                                                                                                                                                                                                            |
| **Behavior**           | Not malicious; cannot read your hard drive, run programs, or spread viruses. They only store information that you voluntarily provide to websites.                                                                                                                                                                                                                                                                                        |
| **Purpose of Cookies** | **Session Management:** Store shopping cart items, language preferences, login info.<br>**Tracking:** Monitor browsing habits for targeted ads and recommendations.<br>**Personalization:** Suggest relevant content based on past behavior.<br>**Keeping Users Logged In:** Store authentication data so users don’t log in repeatedly.                                                                                                  |
| **Storage Locations**  | - Stored as text files on device storage.<br>- Managed by each web browser’s internal storage system.<br>- Examples:<br>• Chrome → “Cookies” file in profile directory<br>• Firefox → `cookies.sqlite` database file<br>- Manage via browser settings (e.g., Chrome: Settings → Privacy and Security → Cookies and other site data → See all site data and permissions).                                                                  |
| **Cookie Parameters**  | 1. **Name:** Identifier for cookie.<br>2. **Value:** Data stored in cookie.<br>3. **Expiration Date:** Duration cookie stays active.<br>4. **Path:** URL path where cookie is valid.<br>5. **Domain:** Makes cookie valid across multiple servers within a domain.<br>6. **Secure Flag:** Cookie sent only over HTTPS.                                                                                                                    |
| **Types of Cookies**   | **1. Session Cookies:** Temporary, deleted when browser closes.<br>**2. Persistent Cookies:** Remain on device until expiration or manual deletion.<br>**3. First-Party Cookies:** Set by the website being visited; store preferences, login status.<br>**4. Third-Party Cookies:** Set by external sites (ads, trackers). Track browsing across sites.<br>**5. Secure Cookies:** Sent only over encrypted HTTPS connections for safety. |

---



