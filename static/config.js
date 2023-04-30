window.INIS = {
    // API地址 - 填写后端域名 请严格按照以下格式填写
    api: 'https://api.yize.site/api',
    // 后端开启token验证后，需要将token填写到此处
    token: '1a54e5f6f05b33b9aad684e324f05491',
    // 站点标题
    title: '一条咸鱼',
    // 路由模式 - true = 带 # 号路由 - 不建议修改此项 
    // 注意: 设为false 需要添加以下nginx配置来配合
    // error_page 404 index.html;
    // location / {
    //     try_files $uri $uri/ /index.html;
    // }
    route_hash: true,
    // 请勿擅自修改此处
    version: '1.1.4',
}

