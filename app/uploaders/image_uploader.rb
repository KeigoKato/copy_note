class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  # version :title_image do
  #   process resize_to_limit: [578, 238]
  # end
  process resize_to_limit: [578, 238]

  storage :file

  version :thumbnail do
    process resize_to_fit: [36, 36]
  end

  def extension_white_list
    %W[jpg jpeg gif png]
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
end
