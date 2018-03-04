class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  process resize_to_limit: [578,266]
  storage :file

  version :thumbnail do
    process resize_to_fill: [36, 36]
  end

  def extension_white_list
    %W[jpg jpeg gif png]
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
end
