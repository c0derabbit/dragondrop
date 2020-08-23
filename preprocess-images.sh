echo "Preprocessing images…"

if ! command -v magick &> /dev/null
then
  echo "Installing magick"
  brew install imagemagick
fi

if ! command -v optipng &> /dev/null
then
  echo "Installing optipng"
  brew install optipng
fi

if ! command -v cwebp &> /dev/null
then
  echo "Installing webp"
  brew install webp
fi

for dir in photos/*; do
  cd $dir
  mkdir temp

  # create a 1200px wide copy of every image file
  magick convert *.(jpg|png|jpeg) -resize 1200 temp/%03d.png
  # optimise png
  optipng -o4 temp/*.png

  # create webp versions for every file
  for file in temp/*
    do cwebp $file -o $file.webp -q 100 -noalpha
  done

  # fix: remove .png from .png.webp extensions
  for file in temp/*.png.webp
    do mv "$file" "${file%png.webp}webp"
  done

  # delete originals
  rm *.(jpg|jpeg|png)

  # move everything from temp to current dir and clean up temp/
  mv temp/* ./
  rmdir temp

  cd ../..
done
