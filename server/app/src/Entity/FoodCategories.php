<?php
namespace App\Entity;

use App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * FoodCategories
 *
 * @ORM\Table(name="food_categories")
 * @ORM\Entity
 */
class FoodCategories
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
     * @var integer
     *
     * @ORM\Column(name="restaurant_id", type="integer", nullable=false)
     */
    private $restaurantId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name;

    /**
     * @var integer
     *
     * @ORM\Column(name="category_type_id", type="integer", nullable=false)
     */
    private $categoryTypeId;


}

