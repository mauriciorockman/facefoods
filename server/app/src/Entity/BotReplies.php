<?php
namespace App\Entity;

use App\Entity;
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


}

