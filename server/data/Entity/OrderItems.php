<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * OrderItems
 *
 * @ORM\Table(name="order_items", indexes={@ORM\Index(name="order_items_fk0", columns={"order_id"}), @ORM\Index(name="order_items_fk1", columns={"menu_id"})})
 * @ORM\Entity
 */
class OrderItems
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
     * @ORM\Column(name="extras_description", type="string", length=255, nullable=false)
     */
    private $extrasDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="extras_total", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $extrasTotal;

    /**
     * @var string
     *
     * @ORM\Column(name="menu_price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $menuPrice;

    /**
     * @var integer
     *
     * @ORM\Column(name="quantity", type="integer", nullable=false)
     */
    private $quantity;

    /**
     * @var \Orders
     *
     * @ORM\ManyToOne(targetEntity="Orders")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="order_id", referencedColumnName="id")
     * })
     */
    private $order;

    /**
     * @var \Menu
     *
     * @ORM\ManyToOne(targetEntity="Menu")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="menu_id", referencedColumnName="id")
     * })
     */
    private $menu;


}

