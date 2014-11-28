<?php
class Model_Post
{
    private $db;

    public function __construct()
    {
        $this->db = new Helper_Database();
    }


    // USERS ------------------------------------- //

   public function searchUser($email, $pass)
    {
        $id=$this->db->queryOne("select password from account where email=? and password=?", array($email, $pass));
        return $id;
    }

   public function searchPasswordByemail($email)
    {
        $id=$this->db->queryOne("select password from account where email=? ", array($email));
        return $id;
    }

    public function insertUser($nom, $pass, $email)
    {
        $id=$this->db->execute("insert into account(username, password, email) values (?,?,?)", array($nom, $pass,  $email));
        return $id;
    }

    public function getUser($id)
    {
        $id=$this->db->queryOne("select * from account where user_id = ?", array($id['user_id']));;
        return $id;
    }




}

