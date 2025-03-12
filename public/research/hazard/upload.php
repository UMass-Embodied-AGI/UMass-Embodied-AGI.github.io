<?php
// 检查解压后的文件夹中是否包含特定的文件夹
function checkRequiredFolders($extracted_dir) {
    $required_folders = array('submit/fire', 'submit/flood', 'submit/wind');

    foreach ($required_folders as $folder) {
        if (!is_dir($extracted_dir . '/' . $folder)) {
            return $folder;
        }
    }

    return null;
}

// 删除文件和文件夹
function deleteFiles($dir) {
    if (!is_dir($dir)) return;
    $files = array_diff(scandir($dir), array('.', '..'));
    foreach ($files as $file) {
        (is_dir("$dir/$file")) ? deleteFiles("$dir/$file") : unlink("$dir/$file");
    }
    rmdir($dir);
}

// 设置上传文件存储的目录
$target_dir = "submit/";

// 检查是否有文件上传
if ($_FILES["fileToUpload"]["error"] != UPLOAD_ERR_OK) {
    echo "Sorry, there was an error uploading your file.";
    exit();
}

// 获取上传的文件信息
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
            // 如果解压失败，可以在此处添加任何适当的操作，如删除已上传的文件
            unlink($target_file);
            exit(); // 终止脚本执行
        }

        // 检查是否包含特定的文件夹
        $missing_folder = checkRequiredFolders($target_dir);
        if ($missing_folder !== null) {
            echo $missing_folder . ' is missing.';
            // 如果有遗失的文件夹，可以在此处添加任何适当的操作，如删除已解压的文件夹
            // 删除已解压的文件夹
            deleteFiles($target_dir);
            exit(); // 终止脚本执行
        }

        $yourName = substr($_POST['yourName'], 0, 20); // 只获取前 20 个字符
        file_put_contents($target_dir . 'username.txt', $yourName);

        // 依次调用指定路径下的 Python 解释器并执行脚本
        $python_executable = '/vis/home/qinhongzhou/miniconda3/envs/tdw/bin/python';
        $python_script = 'eval.py';
        $folders = array('fire', 'flood', 'wind');
        foreach ($folders as $folder) {
            $command = $python_executable . ' ' . $python_script . ' ' . $folder;
            $output = shell_exec($command);
            echo "<pre>$output</pre>";
        }
        echo "<pre>Evaluation finished. You can refresh the HAZARD homepage and find your score on leaderboard within one or two minutes. If you could not find your score, please check your submit format and username duplication.</pre>";
        deleteFiles($target_dir);
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

