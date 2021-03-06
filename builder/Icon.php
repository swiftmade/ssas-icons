<?php

class Icon
{
    private $name;
    private $file;

    public function __construct($file)
    {
        $this->file = $file;
        $this->name = basename($file, '.png');
    }

    public function name()
    {
        return $this->name;
    }

    public function getImage($targetWidth, $targetHeight)
    {
        list($width, $height) = getimagesize($this->file);

        $source = imagecreatefrompng($this->file);
        imagealphablending($source, false);
        imagesavealpha($source, true);

        $target = imagecreatetruecolor(
            $targetWidth,
            $targetHeight
        );
        imagealphablending($target, false);
        imagesavealpha($target, true);

        imagecopyresampled($target, $source, 0, 0, 0, 0, $targetWidth, $targetHeight, $width, $height);
        imagedestroy($source);

        return $target;
    }
}
