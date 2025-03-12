<?php
$target_dir = "submit/"; // 上传文件存储的目录
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$zipFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// 检查文件大小，这里设置为 10 MB
if ($_FILES["fileToUpload"]["size"] > 10000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// 允许特定的文件格式，这里只允许 ZIP 格式
if ($zipFileType != "zip") {
    echo "Sorry, only ZIP files are allowed.";
    $uploadOk = 0;
}

// 检查 $uploadOk 是否为 0
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    // 如果一切都正常，尝试将文件移动到目标目录
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename($_FILES["fileToUpload"]["name"]). " has been uploaded.";

        // 解压上传的 ZIP 文件
        $zip = new ZipArchive;
        if ($zip->open($target_file) === TRUE) {
            $zip->extractTo($target_dir);
            $zip->close();
            echo 'The ZIP file has been extracted.';
        } else {
            echo 'Failed to extract the ZIP file.';
        }

    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>


