<?php
use Doctrine\ORM\Mapping as ORM;

/**
 * Users
 *
 * @ORM\Table(name="users")
 * @ORM\Entity
 */
class Users
{
    /**
     * @var integer
     *
     * @ORM\Column(name="userID", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $userid;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=50, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=100, nullable=false)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="authToken", type="string", length=255, nullable=true)
     */
    private $authtoken;

    /**
     * @var boolean
     *
     * @ORM\Column(name="emailConfirmed", type="boolean", nullable=true)
     */
    private $emailconfirmed;

    /**
     * @var boolean
     *
     * @ORM\Column(name="deleted", type="boolean", nullable=true)
     */
    private $deleted;

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }

    /**
     * Get userid
     *
     * @return integer
     */
    public function getUserid()
    {
        return $this->userid;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Users
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Users
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return Users
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set authtoken
     *
     * @param string $authtoken
     *
     * @return Users
     */
    public function setAuthtoken($authtoken)
    {
        $this->authtoken = $authtoken;

        return $this;
    }

    /**
     * Get authtoken
     *
     * @return string
     */
    public function getAuthtoken()
    {
        return $this->authtoken;
    }

    /**
     * Set emailconfirmed
     *
     * @param boolean $emailconfirmed
     *
     * @return Users
     */
    public function setEmailconfirmed($emailconfirmed)
    {
        $this->emailconfirmed = $emailconfirmed;

        return $this;
    }

    /**
     * Get emailconfirmed
     *
     * @return boolean
     */
    public function getEmailconfirmed()
    {
        return $this->emailconfirmed;
    }

    /**
     * Set deleted
     *
     * @param boolean $deleted
     *
     * @return Users
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * Get deleted
     *
     * @return boolean
     */
    public function getDeleted()
    {
        return $this->deleted;
    }
}
