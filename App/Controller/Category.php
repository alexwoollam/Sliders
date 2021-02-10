<?php

namespace Sliders\Controller;

class Category{

    public array $currentGutenbergCategories;

    public function __construct(){

        add_filter(
            'block_categories', [$this,'Add'], 10, 6
        );
    }

    /**
     * DefineExisting function
     * We're going to scan the current list of gutneberg categories,
     * so we dont clash.
     *
     * @param array $categories
     * @return array
     */
    public function defineExisting(array $categories): array
    {
        foreach($categories as $category){
            $this->currentGutenbergCategories[$category['slug']] = $category['title'];
        }
        return $this->currentGutenbergCategories;
    }

    public function clashCheck(array $categories, string $slug, string $hrTitle): bool
    {
        foreach($categories as $category){
            if(isset($category[$slug])){
                return true;
            }
        }
        foreach($categories as $category ){
            if($category === $hrTitle){
                return true;
            }
        }
        return false;
    }

    /**
     * Add function
     * Adds the block catesgory.
     *
     * @param array $categories | All Categories.
     * @param array $post       | Post.
     * @param string $slug      | Block Category Slug.
     * @param string $hrTitle   | Human readabeld title.
     * @param string $title     | Block-Title.
     * @param string $icon      | Icon name.
     * @return array
     */
    public function Add(array $categories, object $post, string $slug, string $hrTitle, string $title, string $icon): array
    {
        
        dd(clashCheck($categories,$slug,$hrTitle));

        return array_merge(
            $categories,
            [
                [
                    'slug'  => $slug,
                    'title' => __($hrTitle, $title),
                    'icon'  => 'welcome-widgets-menus',
                ]
            ]            
        );
    }
    


}
