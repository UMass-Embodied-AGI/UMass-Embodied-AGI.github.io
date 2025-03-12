<?php
// 遍历并删除 submit/ 目录下的所有文件和文件夹
function deleteFiles($dir) {
    if (!is_dir($dir)) return;
    $files = array_diff(scandir($dir), array('.', '..'));
    foreach ($files as $file) {
        (is_dir("$dir/$file")) ? deleteFiles("$dir/$file") : unlink("$dir/$file");
    }
    rmdir($dir);
}

// 调用删除函数
deleteFiles('submit/');

echo 'All files and directories in submit/ have been deleted.';
?>

