<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * BotReplies
 *
 * @ORM\Table(name="bot_replies", indexes={@ORM\Index(name="bot_replies_fk0", columns={"restaurant_id"})})
 * @ORM\Entity
 */
class BotReplies
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="received", type="string", length=50, nullable=false)
     */
    private $received;

    /**
     * @var string
     *
     * @ORM\Column(name="reply", type="string", length=255, nullable=false)
     */
    private $reply;

    /**
     * @var \Restaurants
     *
     * @ORM\ManyToOne(targetEntity="Restaurants")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="restaurant_id", referencedColumnName="fb_id")
     * })
     */
    private $restaurant;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set received
     *
     * @param string $received
     *
     * @return BotReplies
     */
    public function setReceived($received)
    {
        $this->received = $received;

        return $this;
    }

    /**
     * Get received
     *
     * @return string
     */
    public function getReceived()
    {
        return $this->received;
    }

    /**
     * Set reply
     *
     * @param string $reply
     *
     * @return BotReplies
     */
    public function setReply($reply)
    {
        $this->reply = $reply;

        return $this;
    }

    /**
     * Get reply
     *
     * @return string
     */
    public function getReply()
    {
        return $this->reply;
    }

    /**
     * Set restaurant
     *
     * @param \Restaurants $restaurant
     *
     * @return BotReplies
     */
    public function setRestaurant(\Restaurants $restaurant = null)
    {
        $this->restaurant = $restaurant;

        return $this;
    }

    /**
     * Get restaurant
     *
     * @return \Restaurants
     */
    public function getRestaurant()
    {
        return $this->restaurant;
    }
}
