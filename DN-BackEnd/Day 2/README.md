* List all roles / Users 

  * /d
  * ![image](https://user-images.githubusercontent.com/64080063/132116981-c88db97c-83ad-4334-921e-5c6e33343d53.png)
* Create Role / User 

  * CREATE USER <username> WITH PASSWORD '<password>';
  * ![image-20210905112548848](C:\Users\ACER\AppData\Roaming\Typora\typora-user-images\image-20210905112548848.png)
  
* Get information about current connection
  * \conninfo
  * ![image](https://user-images.githubusercontent.com/64080063/132117036-4a9d0bc9-1df8-43cf-acec-252c24d7e51a.png)
* Change user / role
  * \c <database name> <username>
  * ![image](https://user-images.githubusercontent.com/64080063/132117109-cb247f25-d25a-41d1-8342-539a8097ae5a.png)
* Create Database
  * CREATE DATABASE <database name>;
  * ![](https://user-images.githubusercontent.com/64080063/132117250-77778436-d222-43d6-a240-f15b64d570d7.png)
* **Switch databases**
  * ![image](https://user-images.githubusercontent.com/64080063/132117943-910aa7a0-2949-442e-9d09-5a8841d900a0.png)
* **Grant Privilages**
  * GRANT ALL PRIVILEGES ON DATABASE "devs" to archie;
* **Drop Database**
  * DROP DATABASE IF EXISTS <database name>;
  * ![image](https://user-images.githubusercontent.com/64080063/132117697-5956d4c4-3ad5-4bbc-8109-905048e39da3.png)
* **Create Table**
  * ![image](https://user-images.githubusercontent.com/64080063/132117935-04b83ac8-af64-441b-9e6d-8746ac4bd764.png)
* **Show tables of a database**
  * \dt
  * ![image](https://user-images.githubusercontent.com/64080063/132117998-e5258038-c5d9-4876-a3ee-49ffc04a1b35.png)
* **Drop table**
  * DROP TABLE <table name>;

