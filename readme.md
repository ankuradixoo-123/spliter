user apis 

register      ✅
login          ✅
node mailer setup 
foget password
invite user via email  / number
logout 

auth 
authMiddleware         ✅

Groups

create a group           ✅
add member to group via existing members       ✅
get all member from group ✅
get all groups ✅
delete a group member from the group ( only group admin can do that)


friend check 
/friendCheck ( if both on the same group in any of the group then friends)


user details 

/postUserDetails ✅
/UpdatrUser
/getAllUserDetailsById

Visit 

/recentVisit

expenses

/addExpenses   ( to every user per / with all the member or with selective member)
/sattleUp
/delete expenses
/list all expenses for perticular group
/list all expenses for all the groups (limit on the expenses)
/edit expenses


payment
/scanPay 


// regex for every service 
// for auth check : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoiYW5AZ21haWwuY29tIiwiaWF0IjoxNzU0NjQyNTQ5LCJleHAiOjE3NTUwNzQ1NDl9.t0vjlz_Jg8BKu7GkiiuGTQusnl4meXTwwIMxTRo21ME











































for clearity 
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password TEXT
);
2. groups table
sql
Copy
Edit
CREATE TABLE groups (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  created_by UUID REFERENCES users(id)
);
3. group_members table (Join Table)
sql
Copy
Edit
CREATE TABLE group_members (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  group_id UUID REFERENCES groups(id),

 // user User @relation(fields: [userId], references: [id])
//group Group @relation(fields: [groupId], references: [id])

  role VARCHAR(20) DEFAULT 'member',
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, group_id)
);
You can make role an ENUM if your DB supports it (like PostgreSQL).

✅ Example Use Cases
➕ Add a user to a group:
sql
Copy
Edit
INSERT INTO group_members (id, user_id, group_id, role)
VALUES (gen_random_uuid(), 'user-id', 'group-id', 'member');
📥 Get all groups a user is in:
sql
Copy
Edit
SELECT g.*
FROM groups g
JOIN group_members gm ON g.id = gm.group_id
WHERE gm.user_id = 'user-id';
📥 Get all users in a group:
sql
Copy
Edit
SELECT u.*
FROM users u
JOIN group_members gm ON u.id = gm.user_id
WHERE gm.group_id = 'group-i
s

conversation for refrerance : https://chatgpt.com/share/68946efa-4308-800a-8782-ef5e9f11746e

