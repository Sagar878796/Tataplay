<?php
header("Content-Type: audio/x-mpegurl");
echo "#EXTM3U\n";
echo "#EXTINF:-1,Test Channel\n";
echo "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8\n";
?>
