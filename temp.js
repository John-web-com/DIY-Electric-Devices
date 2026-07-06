const devices = [
  // ====== 苹果 iPhone 全系列 ======
  {
    id: "iphone-16-pro-max-assembly",
    name: "iPhone 16 Pro Max 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "6-8小时",
    budget: "¥6000-12000",
    budgetNum: 8500,
    keywords: ["iphone", "苹果", "apple", "手机组装", "16promax"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.9英寸 Super Retina XDR 2796x1290", price: 1299, model: "A3189", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4685mAh 3.87V", price: 399, model: "A3190", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "4800万主摄+5000万超广角+4800万长焦", price: 899, model: "A3191", platform: "淘宝", note: "含传感器防抖、镜头保护玻璃" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 299, model: "A3192", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A18 Pro 6核CPU 6核GPU", price: 2599, model: "A3193", platform: "闲鱼", note: "已激活或未激活版本" },
      { name: "钛金属中框", spec: "原色钛金属", price: 599, model: "A3194", platform: "淘宝", note: "含侧边按键、静音开关" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 299, model: "A3195", platform: "拼多多", note: "含无线充电线圈、NFC天线" },
      { name: "充电口排线", spec: "USB-C接口", price: 99, model: "A3196", platform: "京东", note: "含充电IC、麦克风、扬声器" },
      { name: "听筒", spec: "双磁路扬声器", price: 49, model: "A3197", platform: "拼多多", note: "已集成在屏幕总成中" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 79, model: "A3198", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达 Taptic Engine", price: 59, model: "A3199", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A3200", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A3201", platform: "拼多多", note: "含底部五角螺丝、内部十字螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3202", platform: "京东", note: "含加热台、吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装钛金属中框", desc: "取出钛金属中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-16-pro-max-repair",
    name: "iPhone 16 Pro Max 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1300-2000",
    budgetNum: 1600,
    keywords: ["iphone", "苹果", "apple", "手机维修", "屏幕更换", "16promax"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.9英寸 Super Retina XDR 2796x1290", price: 1299, model: "A3189", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A3203", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3204", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3205", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-16-pro-assembly",
    name: "iPhone 16 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥5000-9000",
    budgetNum: 6500,
    keywords: ["iphone", "苹果", "apple", "手机组装", "16pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.3英寸 Super Retina XDR", price: 1099, model: "A3210", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4200mAh 3.87V", price: 349, model: "A3211", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "4800万主摄+5000万超广角+4800万长焦", price: 799, model: "A3212", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 249, model: "A3213", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A18 Pro", price: 2299, model: "A3214", platform: "闲鱼", note: "含处理器" },
      { name: "钛金属中框", spec: "原色钛金属", price: 499, model: "A3215", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 249, model: "A3216", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 89, model: "A3217", platform: "京东", note: "含充电IC" },
      { name: "听筒", spec: "双磁路扬声器", price: 49, model: "A3218", platform: "拼多多", note: "已集成在屏幕总成中" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 69, model: "A3219", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A3220", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A3221", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A3222", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3223", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装钛金属中框", desc: "取出钛金属中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-16-pro-repair",
    name: "iPhone 16 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1100-1800",
    budgetNum: 1400,
    keywords: ["iphone", "苹果", "apple", "手机维修", "屏幕更换", "16pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.3英寸 Super Retina XDR", price: 1099, model: "A3210", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A3221", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3222", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3223", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-16-assembly",
    name: "iPhone 16 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4000-7000",
    budgetNum: 5200,
    keywords: ["iphone", "苹果", "apple", "手机组装", "16"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 899, model: "A3230", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "3800mAh 3.87V", price: 299, model: "A3231", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "4800万主摄+1200万超广角", price: 599, model: "A3232", platform: "淘宝", note: "双摄模组" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 199, model: "A3233", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A18", price: 1899, model: "A3234", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 399, model: "A3235", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 199, model: "A3236", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "A3237", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 59, model: "A3238", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 39, model: "A3239", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 15, model: "A3240", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A3241", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3242", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-16-repair",
    name: "iPhone 16 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥900-1500",
    budgetNum: 1100,
    keywords: ["iphone", "苹果", "apple", "手机维修", "屏幕更换", "16"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 899, model: "A3230", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "A3240", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3241", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3242", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-15-pro-max-assembly",
    name: "iPhone 15 Pro Max 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥4500-8500",
    budgetNum: 6000,
    keywords: ["iphone", "苹果", "手机组装", "15promax"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.7英寸 Super Retina XDR", price: 1199, model: "A3108", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4441mAh 3.87V", price: 349, model: "A3109", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "4800万主摄+1200万超广角+4800万长焦", price: 799, model: "A3110", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 249, model: "A3111", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A17 Pro", price: 2199, model: "A3112", platform: "闲鱼", note: "含处理器" },
      { name: "钛金属中框", spec: "原色钛金属", price: 499, model: "A3113", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 249, model: "A3114", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 89, model: "A3115", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 69, model: "A3116", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A3117", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A3118", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A3119", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3120", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装钛金属中框", desc: "取出钛金属中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-15-pro-max-repair",
    name: "iPhone 15 Pro Max 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1200-1900",
    budgetNum: 1500,
    keywords: ["iphone", "苹果", "手机维修", "屏幕更换", "15promax"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.7英寸 Super Retina XDR", price: 1199, model: "A3108", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A3118", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3119", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3120", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-15-pro-assembly",
    name: "iPhone 15 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥4000-7500",
    budgetNum: 5500,
    keywords: ["iphone", "苹果", "手机组装", "15pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 999, model: "A3090", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "3274mAh 3.87V", price: 299, model: "A3091", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "4800万主摄+1200万超广角", price: 699, model: "A3092", platform: "淘宝", note: "双摄模组" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 249, model: "A3093", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A17 Pro", price: 1999, model: "A3094", platform: "闲鱼", note: "含处理器" },
      { name: "钛金属中框", spec: "原色钛金属", price: 449, model: "A3095", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 249, model: "A3096", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 89, model: "A3097", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 69, model: "A3098", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A3099", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A3100", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A3101", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3102", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装钛金属中框", desc: "取出钛金属中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-15-pro-repair",
    name: "iPhone 15 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["iphone", "苹果", "手机维修", "屏幕更换", "15pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 999, model: "A3090", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A3100", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3101", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3102", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-15-assembly",
    name: "iPhone 15 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥3500-6500",
    budgetNum: 4500,
    keywords: ["iphone", "苹果", "手机组装", "15"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 799, model: "A3060", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "3349mAh 3.87V", price: 249, model: "A3061", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "4800万主摄+1200万超广角", price: 499, model: "A3062", platform: "淘宝", note: "双摄模组" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 199, model: "A3063", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A16", price: 1699, model: "A3064", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 349, model: "A3065", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 199, model: "A3066", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "A3067", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 59, model: "A3068", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 39, model: "A3069", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 15, model: "A3070", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A3071", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3072", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-15-repair",
    name: "iPhone 15 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥800-1400",
    budgetNum: 1000,
    keywords: ["iphone", "苹果", "手机维修", "屏幕更换", "15"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 799, model: "A3060", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "A3070", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A3071", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3072", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-14-pro-max-assembly",
    name: "iPhone 14 Pro Max 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥4000-7500",
    budgetNum: 5500,
    keywords: ["iphone", "苹果", "手机组装", "14promax"],
    parts: [
      { name: "灵动岛屏幕总成", spec: "6.7英寸 Super Retina XDR", price: 999, model: "A2896", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4323mAh 3.87V", price: 299, model: "A2897", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "4800万主摄+1200万超广角+1200万长焦", price: 699, model: "A2898", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 249, model: "A2899", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A16 Pro", price: 1799, model: "A2900", platform: "闲鱼", note: "含处理器" },
      { name: "不锈钢中框", spec: "不锈钢材质", price: 449, model: "A2901", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 249, model: "A2902", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "Lightning接口", price: 79, model: "A2903", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 69, model: "A2904", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A2905", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A2906", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A2907", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A2908", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装不锈钢中框", desc: "取出不锈钢中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-14-pro-max-repair",
    name: "iPhone 14 Pro Max 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["iphone", "苹果", "手机维修", "屏幕更换", "14promax"],
    parts: [
      { name: "灵动岛屏幕总成", spec: "6.7英寸 Super Retina XDR", price: 999, model: "A2896", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A2906", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2907", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A2908", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-13-pro-assembly",
    name: "iPhone 13 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥3500-6500",
    budgetNum: 4700,
    keywords: ["iphone", "苹果", "手机组装", "13pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 799, model: "A2636", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "3095mAh 3.87V", price: 249, model: "A2637", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "1200万主摄+1200万超广角+1200万长焦", price: 599, model: "A2638", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 249, model: "A2639", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A15", price: 1499, model: "A2640", platform: "闲鱼", note: "含处理器" },
      { name: "不锈钢中框", spec: "不锈钢材质", price: 399, model: "A2641", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 199, model: "A2642", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "Lightning接口", price: 69, model: "A2643", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 59, model: "A2644", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A2645", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 19, model: "A2646", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 9, model: "A2647", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A2648", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装不锈钢中框", desc: "取出不锈钢中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-13-pro-repair",
    name: "iPhone 13 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥800-1500",
    budgetNum: 1100,
    keywords: ["iphone", "苹果", "手机维修", "屏幕更换", "13pro"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 799, model: "A2636", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 19, model: "A2646", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2647", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A2648", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-12-pro-assembly",
    name: "iPhone 12 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥3000-6000",
    budgetNum: 4200,
    keywords: ["iphone", "苹果", "12pro", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 699, model: "A2406", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "2815mAh 3.87V", price: 199, model: "A2407", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "1200万主摄+1200万超广角+1200万长焦", price: 499, model: "A2408", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 199, model: "A2409", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A14仿生芯片", price: 1299, model: "A2410", platform: "闲鱼", note: "含处理器" },
      { name: "不锈钢中框", spec: "不锈钢材质", price: 399, model: "A2411", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 199, model: "A2412", platform: "拼多多", note: "含无线充电线圈、NFC天线" },
      { name: "充电口排线", spec: "Lightning接口", price: 79, model: "A2413", platform: "京东", note: "含充电IC、麦克风、扬声器" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 59, model: "A2414", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达 Taptic Engine", price: 49, model: "A2415", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 15, model: "A2416", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A2417", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A2418", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装不锈钢中框", desc: "取出不锈钢中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-12-pro-repair",
    name: "iPhone 12 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥700-1300",
    budgetNum: 950,
    keywords: ["iphone", "苹果", "12pro", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.1英寸 Super Retina XDR", price: 699, model: "A2406", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "A2416", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2417", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A2418", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-11-assembly",
    name: "iPhone 11 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥2500-5000",
    budgetNum: 3400,
    keywords: ["iphone", "苹果", "11", "手机组装"],
    parts: [
      { name: "LCD屏幕总成", spec: "6.1英寸 Liquid Retina HD", price: 499, model: "A2221", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "3110mAh 3.87V", price: 169, model: "A2222", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "1200万主摄+1200万超广角", price: 399, model: "A2223", platform: "淘宝", note: "双摄模组，含传感器" },
      { name: "前置摄像头", spec: "1200万 TrueDepth", price: 179, model: "A2224", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A13仿生芯片", price: 999, model: "A2225", platform: "闲鱼", note: "含处理器" },
      { name: "铝合金中框", spec: "铝合金材质", price: 299, model: "A2226", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 179, model: "A2227", platform: "拼多多", note: "含无线充电线圈、NFC天线" },
      { name: "充电口排线", spec: "Lightning接口", price: 69, model: "A2228", platform: "京东", note: "含充电IC、麦克风、扬声器" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 49, model: "A2229", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达 Taptic Engine", price: 39, model: "A2230", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 12, model: "A2231", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A2232", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A2233", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装铝合金中框", desc: "取出铝合金中框，检查侧边按键和静音开关是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-11-repair",
    name: "iPhone 11 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2.5小时",
    budget: "¥500-1000",
    budgetNum: 700,
    keywords: ["iphone", "苹果", "11", "手机维修", "屏幕更换"],
    parts: [
      { name: "LCD屏幕总成", spec: "6.1英寸 Liquid Retina HD", price: 499, model: "A2221", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "A2231", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2232", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A2233", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "iphone-x-assembly",
    name: "iPhone X 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥2800-5500",
    budgetNum: 3800,
    keywords: ["iphone", "苹果", "x", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "5.8英寸 Super Retina", price: 599, model: "A1865", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "2716mAh 3.81V", price: 149, model: "A1866", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "1200万主摄+1200万长焦", price: 399, model: "A1867", platform: "淘宝", note: "双摄模组，含传感器防抖" },
      { name: "前置摄像头", spec: "700万 TrueDepth", price: 199, model: "A1868", platform: "淘宝", note: "含Face ID组件" },
      { name: "主板", spec: "A11仿生芯片", price: 999, model: "A1869", platform: "闲鱼", note: "含处理器" },
      { name: "不锈钢中框", spec: "不锈钢材质", price: 449, model: "A1870", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "玻璃背板", price: 179, model: "A1871", platform: "拼多多", note: "含无线充电线圈、NFC天线" },
      { name: "充电口排线", spec: "Lightning接口", price: 69, model: "A1872", platform: "京东", note: "含充电IC、麦克风、扬声器" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 49, model: "A1873", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达 Taptic Engine", price: 49, model: "A1874", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP67级防水密封胶", price: 15, model: "A1875", platform: "拼多多", note: "屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A1876", platform: "拼多多", note: "含底部五角螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A1877", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装不锈钢中框", desc: "取出不锈钢中框，检查侧边按键和电源键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接Face ID排线到主板", tip: "Face ID排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "iPhone X的屏幕排线在屏幕顶部，需小心操作" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "iphone-x-repair",
    name: "iPhone X 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥600-1200",
    budgetNum: 850,
    keywords: ["iphone", "苹果", "x", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "5.8英寸 Super Retina", price: 599, model: "A1865", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "A1875", platform: "拼多多", note: "屏幕防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A1876", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A1877", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗五角螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热屏幕", desc: "将手机屏幕朝上放在加热台上，设置温度80°C，加热2-3分钟软化屏幕防水胶", tip: "iPhone X从屏幕侧拆开，不是后盖" },
      { title: "打开屏幕", desc: "用吸盘吸附在屏幕下方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，屏幕顶部有排线连接，不要完全打开" },
      { title: "断开电池排线", desc: "打开屏幕后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线和Face ID排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕顶部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合Face ID排线、触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "闭合屏幕", desc: "将屏幕向下压紧，确保四周贴合中框", tip: "屏幕边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将两颗五角螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸、Face ID等功能", tip: "如果Face ID无法使用，可能需要重新对齐" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 苹果 iPad 系列 ======
  {
    id: "ipad-pro-12-9-assembly",
    name: "iPad Pro 12.9 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "6-8小时",
    budget: "¥6000-10000",
    budgetNum: 7500,
    keywords: ["ipad", "苹果", "平板组装", "prom129"],
    parts: [
      { name: "Liquid Retina XDR屏幕", spec: "12.9英寸 Mini-LED", price: 1899, model: "A2766", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "10758mAh 3.77V", price: 399, model: "A2767", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "M2芯片", price: 2499, model: "A2768", platform: "闲鱼", note: "含处理器" },
      { name: "后置摄像头", spec: "1200万主摄+1000万超广角", price: 499, model: "A2769", platform: "淘宝", note: "双摄模组" },
      { name: "前置摄像头", spec: "1200万超广角", price: 199, model: "A2770", platform: "淘宝", note: "含原深感摄像头" },
      { name: "后盖", spec: "深空灰色铝合金", price: 299, model: "A2771", platform: "淘宝", note: "含边框一体成型" },
      { name: "充电口排线", spec: "USB-C接口", price: 99, model: "A2772", platform: "京东", note: "含充电IC" },
      { name: "扬声器模组", spec: "四扬声器系统", price: 149, model: "A2773", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 59, model: "A2774", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 25, model: "A2775", platform: "拼多多", note: "屏幕与后盖防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 12, model: "A2776", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 59, model: "A2777", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装后盖", desc: "取出铝合金后盖，检查边框无变形或划痕，确认安装位置", tip: "后盖是整个平板的底座，务必检查完好" },
      { title: "安装主板", desc: "将主板放入后盖对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器模组", desc: "将扬声器模组放入后盖对应位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入后盖对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入后盖电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入后盖背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入后盖顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐后盖顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "安装后盖螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将平板平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用平板" },
      { title: "最终检查", desc: "检查平板外观是否有缝隙，测试Apple Pencil和键盘连接功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "ipad-pro-12-9-repair",
    name: "iPad Pro 12.9 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "3-4小时",
    budget: "¥1900-2500",
    budgetNum: 2100,
    keywords: ["ipad", "苹果", "平板维修", "屏幕更换", "prom129"],
    parts: [
      { name: "Liquid Retina XDR屏幕", spec: "12.9英寸 Mini-LED", price: 1899, model: "A2766", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 25, model: "A2775", platform: "拼多多", note: "屏幕与后盖防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2776", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 39, model: "A2777", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭平板", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热屏幕", desc: "将平板屏幕朝上放在加热台上，设置温度80°C，加热3-4分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开屏幕", desc: "用吸盘吸附在屏幕上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤屏幕或损坏排线" },
      { title: "断开电池排线", desc: "打开屏幕后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从平板上取下", tip: "屏幕较薄，操作时注意避免弯折" },
      { title: "清洁后盖", desc: "用酒精棉片清洁后盖边缘的残留胶和灰尘", tip: "确保后盖干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在后盖边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐后盖顶部，向下扣合", tip: "屏幕排线朝向后盖方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合后盖" },
      { title: "拧入底部螺丝", desc: "将两颗螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将平板平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折平板" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试Apple Pencil功能", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "ipad-air-assembly",
    name: "iPad Air 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "4-6小时",
    budget: "¥4000-7000",
    budgetNum: 5200,
    keywords: ["ipad", "苹果", "air", "平板组装"],
    parts: [
      { name: "Liquid Retina屏幕", spec: "10.9英寸", price: 1099, model: "A2588", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "7600mAh 3.77V", price: 299, model: "A2589", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "M2芯片", price: 1999, model: "A2590", platform: "闲鱼", note: "含处理器" },
      { name: "后置摄像头", spec: "1200万主摄", price: 399, model: "A2591", platform: "淘宝", note: "单摄模组" },
      { name: "前置摄像头", spec: "1200万超广角", price: 199, model: "A2592", platform: "淘宝", note: "含原深感摄像头" },
      { name: "后盖", spec: "深空灰色铝合金", price: 249, model: "A2593", platform: "淘宝", note: "含边框一体成型" },
      { name: "充电口排线", spec: "USB-C接口", price: 89, model: "A2594", platform: "京东", note: "含充电IC" },
      { name: "扬声器模组", spec: "双扬声器系统", price: 129, model: "A2595", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "A2596", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 20, model: "A2597", platform: "拼多多", note: "屏幕与后盖防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 10, model: "A2598", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A2599", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装后盖", desc: "取出铝合金后盖，检查边框无变形或划痕，确认安装位置", tip: "后盖是整个平板的底座，务必检查完好" },
      { title: "安装主板", desc: "将主板放入后盖对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器模组", desc: "将扬声器模组放入后盖对应位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入后盖对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入后盖电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入后盖背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入后盖顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐后盖顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "安装后盖螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将平板平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用平板" },
      { title: "最终检查", desc: "检查平板外观是否有缝隙，测试Apple Pencil和键盘连接功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "ipad-air-repair",
    name: "iPad Air 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "2-3小时",
    budget: "¥1100-1700",
    budgetNum: 1300,
    keywords: ["ipad", "苹果", "air", "平板维修", "屏幕更换"],
    parts: [
      { name: "Liquid Retina屏幕", spec: "10.9英寸", price: 1099, model: "A2588", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 20, model: "A2597", platform: "拼多多", note: "屏幕与后盖防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "A2598", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A2599", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、五角螺丝刀、十字螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭平板", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧的两颗螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热屏幕", desc: "将平板屏幕朝上放在加热台上，设置温度80°C，加热3-4分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开屏幕", desc: "用吸盘吸附在屏幕上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤屏幕或损坏排线" },
      { title: "断开电池排线", desc: "打开屏幕后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用十字螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从平板上取下", tip: "屏幕较薄，操作时注意避免弯折" },
      { title: "清洁后盖", desc: "用酒精棉片清洁后盖边缘的残留胶和灰尘", tip: "确保后盖干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在后盖边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐后盖顶部，向下扣合", tip: "屏幕排线朝向后盖方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合后盖" },
      { title: "拧入底部螺丝", desc: "将两颗螺丝拧入底部充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将平板平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折平板" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试Apple Pencil功能", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 苹果 MacBook 系列 ======
  {
    id: "macbook-pro-16-assembly",
    name: "MacBook Pro 16 组装教程",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "assembly",
    difficulty: "较高",
    time: "8-12小时",
    budget: "¥10000-20000",
    budgetNum: 14000,
    keywords: ["macbook", "苹果", "电脑组装", "pro16"],
    parts: [
      { name: "Retina屏幕总成", spec: "16英寸 Liquid Retina XDR", price: 3999, model: "A3403", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "100Wh 锂离子", price: 899, model: "A3404", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "M4 Pro/Max芯片", price: 4999, model: "A3405", platform: "闲鱼", note: "含处理器" },
      { name: "键盘", spec: "妙控键盘", price: 599, model: "A3406", platform: "淘宝", note: "含背光" },
      { name: "触控板", spec: "Force Touch", price: 299, model: "A3407", platform: "淘宝", note: "含Force Touch传感器" },
      { name: "散热风扇", spec: "双风扇系统", price: 199, model: "A3408", platform: "淘宝", note: "含散热铜管" },
      { name: "SSD", spec: "512GB-4TB", price: 999, model: "A3409", platform: "京东", note: "NVMe协议" },
      { name: "扬声器", spec: "六扬声器系统", price: 149, model: "A3410", platform: "拼多多", note: "含低音炮" },
      { name: "后盖", spec: "深空灰色铝合金", price: 499, model: "A3411", platform: "淘宝", note: "含底部螺丝孔" },
      { name: "散热铜管", spec: "均热板散热", price: 199, model: "A3412", platform: "淘宝", note: "连接CPU和风扇" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 15, model: "A3413", platform: "拼多多", note: "含P5/P6螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 79, model: "A3414", platform: "京东", note: "含P5/P6螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装后盖", desc: "取出铝合金后盖，检查外壳无变形或划痕，确认安装位置", tip: "后盖是整个电脑的底座，务必检查完好" },
      { title: "安装主板", desc: "将主板放入后盖对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "安装散热系统", desc: "将散热铜管和风扇安装到主板上，用螺丝固定，确保散热片与CPU接触良好", tip: "散热系统安装是否到位直接影响电脑性能" },
      { title: "安装SSD", desc: "将SSD插入主板M.2插槽，用螺丝固定", tip: "SSD插入时要对准插槽，避免损坏接口" },
      { title: "安装电池", desc: "将电池放入后盖电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装扬声器", desc: "将扬声器模组放入后盖对应位置，连接扬声器排线到主板", tip: "扬声器有左右之分，注意标识" },
      { title: "安装键盘", desc: "将键盘放入C面位置，连接键盘排线到主板", tip: "键盘排线较脆弱，扣合时力度要轻" },
      { title: "安装触控板", desc: "将触控板放入C面位置，连接触控板排线到主板，用螺丝固定", tip: "触控板有正反面，注意标识" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐C面顶部，向下扣合，连接屏幕排线到主板", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装屏幕转轴", desc: "将屏幕转轴固定在C面上，用螺丝固定", tip: "转轴螺丝要对称拧紧，确保屏幕开合顺畅" },
      { title: "安装后盖螺丝", desc: "将底部螺丝拧入后盖螺丝孔", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、键盘、触控板、扬声器等功能", tip: "测试通过后再进行后续步骤" },
      { title: "系统安装", desc: "如果需要，安装macOS系统", tip: "可以通过U盘启动安装" },
      { title: "最终检查", desc: "检查电脑外观是否有缝隙，测试散热和续航", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "macbook-pro-16-repair",
    name: "MacBook Pro 16 电池维修",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥900-1500",
    budgetNum: 1100,
    keywords: ["macbook", "苹果", "电脑维修", "电池更换", "pro16"],
    parts: [
      { name: "电池", spec: "100Wh 锂离子", price: 899, model: "A3404", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "电池胶贴", spec: "电池固定胶", price: 15, model: "A3415", platform: "拼多多", note: "用于固定新电池" },
      { name: "拆机工具", spec: "电池更换专用工具", price: 29, model: "A3414", platform: "京东", note: "含P5螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备P5螺丝刀、塑料撬棒、防静电手环", tip: "建议使用专业拆机工具套装" },
      { title: "关闭电脑", desc: "点击苹果菜单，选择关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用P5螺丝刀拧下底部的10颗螺丝，注意螺丝长度不同", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "打开后盖", desc: "用塑料撬棒从后盖边缘轻轻撬开，打开后盖", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "移除旧电池", desc: "用塑料撬棒轻轻撬开电池胶贴，将旧电池从电脑中取出", tip: "电池胶贴粘性较强，需要耐心操作" },
      { title: "清洁电池仓", desc: "用酒精棉片清洁电池仓内的残留胶和灰尘", tip: "确保电池仓干净无残留" },
      { title: "粘贴电池胶贴", desc: "将新的电池胶贴粘贴在电池仓内", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装新电池", desc: "将新电池放入电池仓，连接电池排线到主板", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐电脑底部，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合电脑" },
      { title: "拧入底部螺丝", desc: "将10颗螺丝拧入底部螺丝孔，注意螺丝位置和长度", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试电池充电和续航功能", tip: "如果电池无法充电，可能需要重新连接排线" },
      { title: "电池校准", desc: "将电池充满电后，放电至20%以下，再充满电完成校准", tip: "首次更换电池后建议进行电池校准" },
      { title: "最终检查", desc: "检查电脑外观是否有缝隙，测试散热功能", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "macbook-air-13-assembly",
    name: "MacBook Air 13 组装教程",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "assembly",
    difficulty: "中等",
    time: "6-8小时",
    budget: "¥7000-12000",
    budgetNum: 9000,
    keywords: ["macbook", "苹果", "电脑组装", "air13"],
    parts: [
      { name: "Retina屏幕总成", spec: "13.6英寸 Liquid Retina", price: 2499, model: "A3113", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "52.6Wh 锂离子", price: 599, model: "A3114", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "M3芯片", price: 3499, model: "A3115", platform: "闲鱼", note: "含处理器" },
      { name: "键盘", spec: "妙控键盘", price: 499, model: "A3116", platform: "淘宝", note: "含背光" },
      { name: "触控板", spec: "Force Touch", price: 249, model: "A3117", platform: "淘宝", note: "含Force Touch传感器" },
      { name: "SSD", spec: "256GB-2TB", price: 799, model: "A3118", platform: "京东", note: "NVMe协议" },
      { name: "后盖", spec: "深空灰色铝合金", price: 399, model: "A3119", platform: "淘宝", note: "含底部螺丝孔" },
      { name: "扬声器", spec: "双扬声器系统", price: 129, model: "A3120", platform: "拼多多", note: "含低音单元" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 12, model: "A3121", platform: "拼多多", note: "含P5螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 59, model: "A3122", platform: "京东", note: "含P5螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装后盖", desc: "取出铝合金后盖，检查外壳无变形或划痕，确认安装位置", tip: "后盖是整个电脑的底座，务必检查完好" },
      { title: "安装主板", desc: "将主板放入后盖对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "安装SSD", desc: "将SSD插入主板M.2插槽，用螺丝固定", tip: "SSD插入时要对准插槽，避免损坏接口" },
      { title: "安装电池", desc: "将电池放入后盖电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装扬声器", desc: "将扬声器模组放入后盖对应位置，连接扬声器排线到主板", tip: "扬声器有左右之分，注意标识" },
      { title: "安装键盘", desc: "将键盘放入C面位置，连接键盘排线到主板", tip: "键盘排线较脆弱，扣合时力度要轻" },
      { title: "安装触控板", desc: "将触控板放入C面位置，连接触控板排线到主板，用螺丝固定", tip: "触控板有正反面，注意标识" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐C面顶部，向下扣合，连接屏幕排线到主板", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装屏幕转轴", desc: "将屏幕转轴固定在C面上，用螺丝固定", tip: "转轴螺丝要对称拧紧，确保屏幕开合顺畅" },
      { title: "安装后盖螺丝", desc: "将底部螺丝拧入后盖螺丝孔", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、键盘、触控板、扬声器等功能", tip: "测试通过后再进行后续步骤" },
      { title: "系统安装", desc: "如果需要，安装macOS系统", tip: "可以通过U盘启动安装" },
      { title: "最终检查", desc: "检查电脑外观是否有缝隙，测试续航", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "macbook-air-13-repair",
    name: "MacBook Air 13 电池维修",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2小时",
    budget: "¥600-1200",
    budgetNum: 800,
    keywords: ["macbook", "苹果", "电脑维修", "电池更换", "air13"],
    parts: [
      { name: "电池", spec: "52.6Wh 锂离子", price: 599, model: "A3114", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "电池胶贴", spec: "电池固定胶", price: 12, model: "A3123", platform: "拼多多", note: "用于固定新电池" },
      { name: "拆机工具", spec: "电池更换专用工具", price: 29, model: "A3122", platform: "京东", note: "含P5螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备P5螺丝刀、塑料撬棒、防静电手环", tip: "建议使用专业拆机工具套装" },
      { title: "关闭电脑", desc: "点击苹果菜单，选择关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用P5螺丝刀拧下底部的8颗螺丝，注意螺丝长度不同", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "打开后盖", desc: "用塑料撬棒从后盖边缘轻轻撬开，打开后盖", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "移除旧电池", desc: "用塑料撬棒轻轻撬开电池胶贴，将旧电池从电脑中取出", tip: "电池胶贴粘性较强，需要耐心操作" },
      { title: "清洁电池仓", desc: "用酒精棉片清洁电池仓内的残留胶和灰尘", tip: "确保电池仓干净无残留" },
      { title: "粘贴电池胶贴", desc: "将新的电池胶贴粘贴在电池仓内", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装新电池", desc: "将新电池放入电池仓，连接电池排线到主板", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐电脑底部，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合电脑" },
      { title: "拧入底部螺丝", desc: "将8颗螺丝拧入底部螺丝孔，注意螺丝位置和长度", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试电池充电和续航功能", tip: "如果电池无法充电，可能需要重新连接排线" },
      { title: "电池校准", desc: "将电池充满电后，放电至20%以下，再充满电完成校准", tip: "首次更换电池后建议进行电池校准" },
      { title: "最终检查", desc: "检查电脑外观是否有缝隙，测试续航功能", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 苹果 Apple Watch 系列 ======
  {
    id: "apple-watch-ultra-2-assembly",
    name: "Apple Watch Ultra 2 组装教程",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥3000-5000",
    budgetNum: 3800,
    keywords: ["applewatch", "苹果", "手表组装", "ultra2"],
    parts: [
      { name: "OLED屏幕总成", spec: "49mm", price: 999, model: "A3088", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "564mAh 3.87V", price: 199, model: "A3089", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "S9芯片", price: 1499, model: "A3090", platform: "闲鱼", note: "含处理器" },
      { name: "表带", spec: "高山橙野径表带", price: 199, model: "A3091", platform: "淘宝", note: "含表带连接器" },
      { name: "心率传感器", spec: "光学心率传感器", price: 149, model: "A3092", platform: "淘宝", note: "含血氧传感器" },
      { name: "外壳", spec: "钛金属表壳", price: 299, model: "A3093", platform: "淘宝", note: "含表冠和侧边按钮" },
      { name: "充电线圈", spec: "MagSafe充电", price: 49, model: "A3094", platform: "拼多多", note: "无线充电线圈" },
      { name: "扬声器", spec: "微型扬声器", price: 39, model: "A3095", platform: "拼多多", note: "防水设计" },
      { name: "麦克风", spec: "降噪麦克风", price: 29, model: "A3096", platform: "拼多多", note: "防水设计" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "A3097", platform: "拼多多", note: "屏幕与表壳防水胶" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A3098", platform: "拼多多", note: "含微型螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3099", platform: "京东", note: "含微型螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "手表零件非常微小，务必在防静电环境下操作" },
      { title: "安装表壳", desc: "取出钛金属表壳，检查表冠和侧边按钮是否正常，确认表壳无变形或划痕", tip: "表壳是整个手表的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入表壳对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "安装充电线圈", desc: "将充电线圈放入表壳背部位置，连接线圈排线到主板", tip: "充电线圈有正反面，注意标识" },
      { title: "安装心率传感器", desc: "将心率传感器放入表壳背部位置，连接传感器排线到主板", tip: "传感器要对准表壳背部开孔" },
      { title: "安装扬声器和麦克风", desc: "将扬声器和麦克风放入表壳对应位置，连接排线到主板", tip: "扬声器和麦克风有防水设计，安装时注意不要损坏防水胶圈" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入表壳电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐表壳顶部，向下扣合，连接屏幕排线到主板", tip: "屏幕排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕防水胶", desc: "将防水胶粘贴在表壳边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合表壳" },
      { title: "安装表冠和按钮", desc: "将表冠和侧边按钮安装到表壳上，用螺丝固定", tip: "表冠有防水胶圈，安装时注意不要损坏" },
      { title: "安装表带", desc: "将表带连接到表壳上", tip: "表带连接器要对准表耳" },
      { title: "功能测试", desc: "按下表冠开机，测试屏幕显示、触摸、心率传感器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手表" },
      { title: "最终检查", desc: "检查手表外观是否有缝隙，测试防水功能（可选）", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "apple-watch-ultra-2-repair",
    name: "Apple Watch Ultra 2 屏幕维修",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "repair",
    difficulty: "较高",
    time: "1.5-2小时",
    budget: "¥1000-1600",
    budgetNum: 1200,
    keywords: ["applewatch", "苹果", "手表维修", "屏幕更换", "ultra2"],
    parts: [
      { name: "OLED屏幕总成", spec: "49mm", price: 999, model: "A3088", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "A3097", platform: "拼多多", note: "屏幕与表壳防水胶" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3099", platform: "京东", note: "含微型螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、微型螺丝刀、塑料撬棒、防静电手环", tip: "手表零件非常微小，建议使用专业工具" },
      { title: "关闭手表", desc: "长按表冠和侧边按钮，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸表带", desc: "按住表带释放按钮，将表带从表壳上取下", tip: "表带取下后可以放在一边" },
      { title: "加热屏幕", desc: "将手表屏幕朝上放在加热台上，设置温度60°C，加热2-3分钟软化防水胶", tip: "加热温度不要过高，避免损坏内部零件" },
      { title: "打开屏幕", desc: "用吸盘吸附在屏幕上方，轻轻拉起，同时用塑料撬棒沿边缘划开防水胶", tip: "操作要慢，避免划伤屏幕或损坏排线" },
      { title: "断开电池排线", desc: "打开屏幕后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手表上取下", tip: "屏幕较薄，操作时注意避免弯折" },
      { title: "清洁表壳", desc: "用酒精棉片清洁表壳边缘的残留胶和灰尘", tip: "确保表壳干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在表壳边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐表壳顶部，向下扣合", tip: "屏幕排线朝向表壳方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合表壳" },
      { title: "安装表带", desc: "将表带连接到表壳上", tip: "表带连接器要对准表耳" },
      { title: "开机测试", desc: "按下表冠开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手表" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "apple-watch-series-10-assembly",
    name: "Apple Watch Series 10 组装教程",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥2500-4000",
    budgetNum: 3100,
    keywords: ["applewatch", "苹果", "手表组装", "series10"],
    parts: [
      { name: "OLED屏幕总成", spec: "45mm", price: 799, model: "A3100", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "300mAh 3.87V", price: 149, model: "A3101", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "S9芯片", price: 1199, model: "A3102", platform: "闲鱼", note: "含处理器" },
      { name: "表带", spec: "运动型表带", price: 149, model: "A3103", platform: "淘宝", note: "含表带连接器" },
      { name: "心率传感器", spec: "光学心率传感器", price: 99, model: "A3104", platform: "淘宝", note: "含血氧传感器" },
      { name: "外壳", spec: "铝合金表壳", price: 249, model: "A3105", platform: "淘宝", note: "含表冠和侧边按钮" },
      { name: "充电线圈", spec: "MagSafe充电", price: 39, model: "A3106", platform: "拼多多", note: "无线充电线圈" },
      { name: "扬声器", spec: "微型扬声器", price: 29, model: "A3107", platform: "拼多多", note: "防水设计" },
      { name: "麦克风", spec: "降噪麦克风", price: 19, model: "A3108", platform: "拼多多", note: "防水设计" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 10, model: "A3109", platform: "拼多多", note: "屏幕与表壳防水胶" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 6, model: "A3110", platform: "拼多多", note: "含微型螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "A3111", platform: "京东", note: "含微型螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "手表零件非常微小，务必在防静电环境下操作" },
      { title: "安装表壳", desc: "取出铝合金表壳，检查表冠和侧边按钮是否正常，确认表壳无变形或划痕", tip: "表壳是整个手表的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入表壳对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "安装充电线圈", desc: "将充电线圈放入表壳背部位置，连接线圈排线到主板", tip: "充电线圈有正反面，注意标识" },
      { title: "安装心率传感器", desc: "将心率传感器放入表壳背部位置，连接传感器排线到主板", tip: "传感器要对准表壳背部开孔" },
      { title: "安装扬声器和麦克风", desc: "将扬声器和麦克风放入表壳对应位置，连接排线到主板", tip: "扬声器和麦克风有防水设计，安装时注意不要损坏防水胶圈" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入表壳电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐表壳顶部，向下扣合，连接屏幕排线到主板", tip: "屏幕排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕防水胶", desc: "将防水胶粘贴在表壳边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合表壳" },
      { title: "安装表冠和按钮", desc: "将表冠和侧边按钮安装到表壳上，用螺丝固定", tip: "表冠有防水胶圈，安装时注意不要损坏" },
      { title: "安装表带", desc: "将表带连接到表壳上", tip: "表带连接器要对准表耳" },
      { title: "功能测试", desc: "按下表冠开机，测试屏幕显示、触摸、心率传感器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手表" },
      { title: "最终检查", desc: "检查手表外观是否有缝隙，测试防水功能（可选）", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "apple-watch-series-10-repair",
    name: "Apple Watch Series 10 屏幕维修",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "repair",
    difficulty: "较高",
    time: "1.5-2小时",
    budget: "¥800-1400",
    budgetNum: 1000,
    keywords: ["applewatch", "苹果", "手表维修", "屏幕更换", "series10"],
    parts: [
      { name: "OLED屏幕总成", spec: "45mm", price: 799, model: "A3100", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 10, model: "A3109", platform: "拼多多", note: "屏幕与表壳防水胶" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "A3111", platform: "京东", note: "含微型螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、微型螺丝刀、塑料撬棒、防静电手环", tip: "手表零件非常微小，建议使用专业工具" },
      { title: "关闭手表", desc: "长按表冠和侧边按钮，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸表带", desc: "按住表带释放按钮，将表带从表壳上取下", tip: "表带取下后可以放在一边" },
      { title: "加热屏幕", desc: "将手表屏幕朝上放在加热台上，设置温度60°C，加热2-3分钟软化防水胶", tip: "加热温度不要过高，避免损坏内部零件" },
      { title: "打开屏幕", desc: "用吸盘吸附在屏幕上方，轻轻拉起，同时用塑料撬棒沿边缘划开防水胶", tip: "操作要慢，避免划伤屏幕或损坏排线" },
      { title: "断开电池排线", desc: "打开屏幕后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手表上取下", tip: "屏幕较薄，操作时注意避免弯折" },
      { title: "清洁表壳", desc: "用酒精棉片清洁表壳边缘的残留胶和灰尘", tip: "确保表壳干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在表壳边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐表壳顶部，向下扣合", tip: "屏幕排线朝向表壳方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "按压屏幕", desc: "将屏幕四周按压到位，确保完全贴合", tip: "屏幕边缘要完全贴合表壳" },
      { title: "安装表带", desc: "将表带连接到表壳上", tip: "表带连接器要对准表耳" },
      { title: "开机测试", desc: "按下表冠开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手表" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 苹果 AirPods 系列 ======
  {
    id: "airpods-pro-2-assembly",
    name: "AirPods Pro 2 组装教程",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "assembly",
    difficulty: "中等",
    time: "3-4小时",
    budget: "¥1000-2000",
    budgetNum: 1400,
    keywords: ["airpods", "苹果", "耳机组装", "pro2"],
    parts: [
      { name: "扬声器单元", spec: "定制驱动单元", price: 199, model: "A3065", platform: "淘宝", note: "含动圈振膜" },
      { name: "电池", spec: "耳机用锂电池", price: 99, model: "A3066", platform: "京东", note: "原装品质，带保护板" },
      { name: "H2芯片主板", spec: "Apple H2芯片", price: 399, model: "A3067", platform: "闲鱼", note: "含处理器" },
      { name: "充电盒电池", spec: "充电盒锂电池", price: 79, model: "A3068", platform: "京东", note: "带保护板" },
      { name: "耳塞", spec: "硅胶耳塞", price: 29, model: "A3069", platform: "拼多多", note: "大中小三个尺寸" },
      { name: "外壳", spec: "耳机外壳", price: 99, model: "A3070", platform: "淘宝", note: "含耳柄和滤网" },
      { name: "充电盒", spec: "MagSafe充电盒", price: 199, model: "A3071", platform: "淘宝", note: "含无线充电线圈" },
      { name: "麦克风", spec: "降噪麦克风", price: 49, model: "A3072", platform: "拼多多", note: "含防风网" },
      { name: "气压传感器", spec: "自适应降噪传感器", price: 39, model: "A3073", platform: "拼多多", note: "检测耳塞密封度" },
      { name: "防水胶圈", spec: "IPX4防水胶圈", price: 12, model: "A3074", platform: "拼多多", note: "耳机防水胶圈" },
      { name: "螺丝套装", spec: "微型螺丝", price: 6, model: "A3075", platform: "拼多多", note: "含耳机螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "A3076", platform: "京东", note: "含撬片、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "耳机零件非常微小，务必在防静电环境下操作" },
      { title: "安装主板", desc: "将H2芯片主板放入耳机外壳内部，用螺丝固定", tip: "主板位置要准确，避免挤压排线" },
      { title: "安装扬声器单元", desc: "将扬声器单元放入耳机外壳前端，连接扬声器排线到主板", tip: "扬声器有正反面，注意标识" },
      { title: "安装麦克风", desc: "将麦克风放入耳机外壳内部，连接麦克风排线到主板", tip: "麦克风有防风网，安装时注意不要损坏" },
      { title: "安装气压传感器", desc: "将气压传感器放入耳机外壳内部，连接传感器排线到主板", tip: "传感器要对准外壳开孔" },
      { title: "安装电池", desc: "将电池放入耳机外壳内部，连接电池排线到主板", tip: "电池要固定牢固，防止晃动" },
      { title: "安装防水胶圈", desc: "将防水胶圈安装在耳机外壳边缘", tip: "防水胶圈要安装到位，确保密封" },
      { title: "安装滤网", desc: "将滤网安装在耳机外壳前端", tip: "滤网要安装平整，避免影响音质" },
      { title: "安装耳塞", desc: "将耳塞安装在耳机外壳前端", tip: "耳塞要安装牢固，防止脱落" },
      { title: "安装充电盒主板", desc: "将充电盒主板放入充电盒内部，用螺丝固定", tip: "主板位置要准确" },
      { title: "安装充电盒电池", desc: "将充电盒电池放入充电盒内部，连接电池排线到主板", tip: "电池要固定牢固" },
      { title: "安装充电线圈", desc: "将无线充电线圈放入充电盒内部，连接线圈排线到主板", tip: "线圈要对准充电盒背部" },
      { title: "组装充电盒", desc: "将充电盒上下盖对齐，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "功能测试", desc: "将耳机放入充电盒，测试充电功能，连接手机测试音质和降噪功能", tip: "测试通过后再进行后续步骤" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙，测试防水功能（可选）", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "airpods-pro-2-repair",
    name: "AirPods Pro 2 电池维修",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "repair",
    difficulty: "中等",
    time: "1-1.5小时",
    budget: "¥100-200",
    budgetNum: 140,
    keywords: ["airpods", "苹果", "耳机维修", "电池更换", "pro2"],
    parts: [
      { name: "电池", spec: "耳机用锂电池", price: 99, model: "A3066", platform: "京东", note: "原装品质，带保护板" },
      { name: "电池胶贴", spec: "电池固定胶", price: 8, model: "A3077", platform: "拼多多", note: "用于固定新电池" },
      { name: "拆机工具", spec: "电池更换专用工具", price: 29, model: "A3076", platform: "京东", note: "含撬片、镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备塑料撬片、镊子、防静电手环", tip: "耳机零件非常微小，建议使用专业工具" },
      { title: "取出耳机", desc: "将耳机从充电盒中取出", tip: "确保耳机已完全充电" },
      { title: "打开耳机外壳", desc: "用塑料撬片从耳机外壳底部轻轻撬开", tip: "操作要慢，避免损坏外壳或内部零件" },
      { title: "断开电池排线", desc: "打开外壳后，用镊子断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "移除旧电池", desc: "用镊子轻轻将旧电池从外壳中取出", tip: "电池较小，操作时要小心" },
      { title: "清洁外壳", desc: "用酒精棉片清洁外壳内部的残留胶和灰尘", tip: "确保外壳干净无残留" },
      { title: "粘贴电池胶贴", desc: "将新的电池胶贴粘贴在外壳内部", tip: "电池胶贴要粘贴牢固" },
      { title: "安装新电池", desc: "将新电池放入外壳内部，连接电池排线到主板", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "组装外壳", desc: "将外壳上下盖对齐，用力压紧", tip: "外壳边缘要完全贴合" },
      { title: "放入充电盒", desc: "将耳机放入充电盒，测试充电功能", tip: "如果无法充电，可能需要重新连接排线" },
      { title: "功能测试", desc: "连接手机测试音质和降噪功能", tip: "如果音质异常，可能需要检查扬声器连接" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙，测试续航", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "airpods-4-assembly",
    name: "AirPods 4 组装教程",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "assembly",
    difficulty: "中等",
    time: "3-4小时",
    budget: "¥800-1500",
    budgetNum: 1000,
    keywords: ["airpods", "苹果", "耳机组装", "4"],
    parts: [
      { name: "扬声器单元", spec: "定制驱动单元", price: 149, model: "A3080", platform: "淘宝", note: "含动圈振膜" },
      { name: "电池", spec: "耳机用锂电池", price: 79, model: "A3081", platform: "京东", note: "原装品质，带保护板" },
      { name: "H2芯片主板", spec: "Apple H2芯片", price: 299, model: "A3082", platform: "闲鱼", note: "含处理器" },
      { name: "充电盒", spec: "MagSafe充电盒", price: 149, model: "A3083", platform: "淘宝", note: "含无线充电线圈" },
      { name: "外壳", spec: "耳机外壳", price: 79, model: "A3084", platform: "淘宝", note: "含耳柄和滤网" },
      { name: "麦克风", spec: "降噪麦克风", price: 39, model: "A3085", platform: "拼多多", note: "含防风网" },
      { name: "充电盒电池", spec: "充电盒锂电池", price: 69, model: "A3086", platform: "京东", note: "带保护板" },
      { name: "防水胶圈", spec: "防水胶圈", price: 10, model: "A3087", platform: "拼多多", note: "耳机防水胶圈" },
      { name: "螺丝套装", spec: "微型螺丝", price: 5, model: "A3088", platform: "拼多多", note: "含耳机螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "A3089", platform: "京东", note: "含撬片、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "耳机零件非常微小，务必在防静电环境下操作" },
      { title: "安装主板", desc: "将H2芯片主板放入耳机外壳内部，用螺丝固定", tip: "主板位置要准确，避免挤压排线" },
      { title: "安装扬声器单元", desc: "将扬声器单元放入耳机外壳前端，连接扬声器排线到主板", tip: "扬声器有正反面，注意标识" },
      { title: "安装麦克风", desc: "将麦克风放入耳机外壳内部，连接麦克风排线到主板", tip: "麦克风有防风网，安装时注意不要损坏" },
      { title: "安装电池", desc: "将电池放入耳机外壳内部，连接电池排线到主板", tip: "电池要固定牢固，防止晃动" },
      { title: "安装防水胶圈", desc: "将防水胶圈安装在耳机外壳边缘", tip: "防水胶圈要安装到位，确保密封" },
      { title: "安装滤网", desc: "将滤网安装在耳机外壳前端", tip: "滤网要安装平整，避免影响音质" },
      { title: "安装充电盒主板", desc: "将充电盒主板放入充电盒内部，用螺丝固定", tip: "主板位置要准确" },
      { title: "安装充电盒电池", desc: "将充电盒电池放入充电盒内部，连接电池排线到主板", tip: "电池要固定牢固" },
      { title: "安装充电线圈", desc: "将无线充电线圈放入充电盒内部，连接线圈排线到主板", tip: "线圈要对准充电盒背部" },
      { title: "组装充电盒", desc: "将充电盒上下盖对齐，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "功能测试", desc: "将耳机放入充电盒，测试充电功能，连接手机测试音质", tip: "测试通过后再进行后续步骤" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "airpods-4-repair",
    name: "AirPods 4 电池维修",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "repair",
    difficulty: "中等",
    time: "1-1.5小时",
    budget: "¥80-160",
    budgetNum: 110,
    keywords: ["airpods", "苹果", "耳机维修", "电池更换", "4"],
    parts: [
      { name: "电池", spec: "耳机用锂电池", price: 79, model: "A3081", platform: "京东", note: "原装品质，带保护板" },
      { name: "电池胶贴", spec: "电池固定胶", price: 6, model: "A3090", platform: "拼多多", note: "用于固定新电池" },
      { name: "拆机工具", spec: "电池更换专用工具", price: 29, model: "A3089", platform: "京东", note: "含撬片、镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备塑料撬片、镊子、防静电手环", tip: "耳机零件非常微小，建议使用专业工具" },
      { title: "取出耳机", desc: "将耳机从充电盒中取出", tip: "确保耳机已完全充电" },
      { title: "打开耳机外壳", desc: "用塑料撬片从耳机外壳底部轻轻撬开", tip: "操作要慢，避免损坏外壳或内部零件" },
      { title: "断开电池排线", desc: "打开外壳后，用镊子断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "移除旧电池", desc: "用镊子轻轻将旧电池从外壳中取出", tip: "电池较小，操作时要小心" },
      { title: "清洁外壳", desc: "用酒精棉片清洁外壳内部的残留胶和灰尘", tip: "确保外壳干净无残留" },
      { title: "粘贴电池胶贴", desc: "将新的电池胶贴粘贴在外壳内部", tip: "电池胶贴要粘贴牢固" },
      { title: "安装新电池", desc: "将新电池放入外壳内部，连接电池排线到主板", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "组装外壳", desc: "将外壳上下盖对齐，用力压紧", tip: "外壳边缘要完全贴合" },
      { title: "放入充电盒", desc: "将耳机放入充电盒，测试充电功能", tip: "如果无法充电，可能需要重新连接排线" },
      { title: "功能测试", desc: "连接手机测试音质", tip: "如果音质异常，可能需要检查扬声器连接" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙，测试续航", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 苹果 HomePod 系列 ======
  {
    id: "homepod-2-assembly",
    name: "HomePod 2 组装教程",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥2000-4500",
    budgetNum: 3000,
    keywords: ["homepod", "苹果", "音箱", "音频组装"],
    parts: [
      { name: "高音扬声器", spec: "5个 全频高音单元", price: 199, model: "A3090", platform: "淘宝", note: "环形排列" },
      { name: "低音扬声器", spec: "4英寸低音单元", price: 299, model: "A3091", platform: "淘宝", note: "含振动阻尼系统" },
      { name: "主板", spec: "Apple S7芯片", price: 599, model: "A3092", platform: "闲鱼", note: "含处理器、内存、存储" },
      { name: "电源模块", spec: "内置电源适配器", price: 149, model: "A3093", platform: "京东", note: "220V输入" },
      { name: "麦克风阵列", spec: "6麦克风阵列", price: 99, model: "A3094", platform: "淘宝", note: "用于语音识别" },
      { name: "外壳", spec: "织物网状外壳", price: 199, model: "A3095", platform: "拼多多", note: "含防尘网" },
      { name: "顶盖", spec: "触控操作面板", price: 79, model: "A3096", platform: "淘宝", note: "含音量加减、播放暂停按键" },
      { name: "底座", spec: "硅胶防滑底座", price: 49, model: "A3097", platform: "拼多多", note: "含橡胶脚垫" },
      { name: "扬声器固定架", spec: "塑料固定支架", price: 39, model: "A3098", platform: "淘宝", note: "固定高音扬声器" },
      { name: "散热片", spec: "铝合金散热片", price: 29, model: "A3099", platform: "淘宝", note: "主板散热" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "A3100", platform: "拼多多", note: "含各种规格螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "A3101", platform: "京东", note: "含撬棒、螺丝刀" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装底座", desc: "将硅胶防滑底座放置在工作台上，确认底座平整无变形", tip: "底座是HomePod的基础，务必放置平稳" },
      { title: "安装电源模块", desc: "将电源模块固定在底座上方，连接电源线到主板接口", tip: "电源模块较重，注意固定牢固" },
      { title: "安装低音扬声器", desc: "将低音扬声器放入底座中央位置，用螺丝固定扬声器支架", tip: "低音扬声器有方向性，确保正面朝上" },
      { title: "安装扬声器固定架", desc: "将扬声器固定架安装在低音扬声器上方，用于固定高音扬声器", tip: "固定架需要对齐螺丝孔位" },
      { title: "安装高音扬声器", desc: "将5个高音扬声器均匀安装在固定架上，连接扬声器排线到主板", tip: "高音扬声器需要环形均匀分布，确保音质均匀" },
      { title: "安装主板", desc: "将主板安装在扬声器组件上方，用螺丝固定，连接所有排线", tip: "主板是核心部件，安装前检查接口是否完好" },
      { title: "安装散热片", desc: "将铝合金散热片安装在主板上方，用导热胶固定", tip: "散热片有助于主板散热，避免过热" },
      { title: "安装麦克风阵列", desc: "将麦克风阵列安装在主板上方，连接麦克风排线", tip: "麦克风阵列需要对准顶盖位置" },
      { title: "安装顶盖", desc: "将触控顶盖安装在顶部，连接触控排线到主板", tip: "顶盖有触控功能，安装时避免压迫排线" },
      { title: "安装外壳", desc: "将织物外壳从上向下套入，确保外壳完全贴合内部组件", tip: "外壳较紧，需要慢慢向下套入" },
      { title: "功能测试", desc: "连接电源，测试扬声器声音、触控功能、麦克风等", tip: "测试通过后再进行后续步骤" },
      { title: "音质校准", desc: "播放测试音频，校准扬声器音质", tip: "建议播放不同频率的测试音频" },
      { title: "最终检查", desc: "检查HomePod外观是否完好，测试Siri语音助手", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "homepod-2-repair",
    name: "HomePod 2 扬声器维修",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "repair",
    difficulty: "中等",
    time: "2-3小时",
    budget: "¥300-800",
    budgetNum: 500,
    keywords: ["homepod", "苹果", "音箱", "音频维修", "扬声器更换"],
    parts: [
      { name: "高音扬声器", spec: "5个 全频高音单元", price: 199, model: "A3090", platform: "淘宝", note: "环形排列" },
      { name: "低音扬声器", spec: "4英寸低音单元", price: 299, model: "A3091", platform: "淘宝", note: "含振动阻尼系统" },
      { name: "扬声器固定架", spec: "塑料固定支架", price: 39, model: "A3098", platform: "淘宝", note: "固定高音扬声器" },
      { name: "拆机工具", spec: "维修专用工具", price: 29, model: "A3101", platform: "京东", note: "含撬棒、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备撬棒、螺丝刀、防静电手环、新扬声器", tip: "建议使用塑料撬棒，避免划伤外壳" },
      { title: "断开电源", desc: "拔下HomePod的电源线，确保设备完全断电", tip: "务必先断开电源再操作" },
      { title: "拆卸顶盖", desc: "用撬棒从顶盖边缘轻轻撬开，取下顶盖", tip: "顶盖有触控排线，取下时注意不要拉扯" },
      { title: "断开触控排线", desc: "用塑料撬棒断开顶盖下方的触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸外壳", desc: "将织物外壳从上向下拉出，露出内部组件", tip: "外壳较紧，需要用力均匀" },
      { title: "拆卸扬声器固定架", desc: "用螺丝刀拧下扬声器固定架上的螺丝，取下固定架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "断开扬声器排线", desc: "依次断开高音扬声器和低音扬声器的排线", tip: "扬声器排线较脆弱，操作时力度要轻" },
      { title: "取下旧扬声器", desc: "将旧扬声器从固定位置取下", tip: "低音扬声器较重，取下时注意平衡" },
      { title: "安装新扬声器", desc: "将新扬声器放入固定位置，连接扬声器排线", tip: "扬声器有方向性，确保安装方向正确" },
      { title: "安装扬声器固定架", desc: "将扬声器固定架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "安装外壳", desc: "将织物外壳从上向下套入，确保外壳完全贴合", tip: "外壳需要慢慢套入，避免损坏" },
      { title: "连接触控排线", desc: "将顶盖触控排线扣合到主板上", tip: "排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装顶盖", desc: "将顶盖对齐位置，向下按压到位", tip: "顶盖边缘要完全贴合" },
      { title: "功能测试", desc: "连接电源，测试扬声器声音是否正常", tip: "播放不同频率的音频测试" },
      { title: "音质校准", desc: "播放测试音频，校准扬声器音质", tip: "如果音质不佳，检查扬声器排线连接" },
      { title: "最终检查", desc: "检查HomePod外观是否完好，测试触控功能", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 三星 Galaxy 系列 ======
  {
    id: "samsung-s24-ultra-assembly",
    name: "三星 Galaxy S24 Ultra 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥6000-11000",
    budgetNum: 8000,
    keywords: ["samsung", "三星", "galaxy", "手机组装", "s24ultra"],
    parts: [
      { name: "Dynamic AMOLED屏幕", spec: "6.8英寸 2X", price: 1499, model: "SM-S928B", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5000mAh 3.87V", price: 399, model: "EB-BS928ABY", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "2亿主摄+1200万超广角+5000万长焦+1000万微距", price: 999, model: "SM-S928C", platform: "淘宝", note: "含传感器防抖" },
      { name: "前置摄像头", spec: "1200万", price: 249, model: "SM-S928D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 2499, model: "SM-S928E", platform: "闲鱼", note: "含处理器" },
      { name: "钛金属边框", spec: "钛金属材质", price: 599, model: "SM-S928F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "磨砂玻璃背板", price: 299, model: "SM-S928G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "S Pen触控笔", spec: "内置触控笔", price: 199, model: "SM-S928H", platform: "京东", note: "含手写笔" },
      { name: "充电口排线", spec: "USB-C接口", price: 99, model: "SM-S928I", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 79, model: "SM-S928J", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 59, model: "SM-S928K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 22, model: "SM-S928L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 10, model: "SM-S928M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 59, model: "SM-S928N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装钛金属边框", desc: "取出钛金属边框，检查侧边按键和音量键是否正常，确认边框无变形或划痕", tip: "边框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入边框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入边框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入边框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入边框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装S Pen", desc: "将S Pen触控笔放入边框对应位置，连接触控笔排线到主板", tip: "S Pen排线非常脆弱，操作需格外小心" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入边框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线有两条，需要分别连接" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入边框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐边框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有三条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐边框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、S Pen、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "samsung-s24-ultra-repair",
    name: "三星 Galaxy S24 Ultra 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1500-2200",
    budgetNum: 1800,
    keywords: ["samsung", "三星", "galaxy", "手机维修", "屏幕更换", "s24ultra"],
    parts: [
      { name: "Dynamic AMOLED屏幕", spec: "6.8英寸 2X", price: 1499, model: "SM-S928B", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 22, model: "SM-S928L", platform: "拼多多", note: "屏幕与边框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "SM-S928M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "SM-S928N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁边框", desc: "用酒精棉片清洁边框边缘的残留胶和灰尘", tip: "确保边框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在边框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐边框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐边框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合边框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "samsung-s24-assembly",
    name: "三星 Galaxy S24 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4500-8000",
    budgetNum: 5800,
    keywords: ["samsung", "三星", "galaxy", "手机组装", "s24"],
    parts: [
      { name: "Dynamic AMOLED屏幕", spec: "6.2英寸 2X", price: 999, model: "SM-S921B", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4000mAh 3.87V", price: 299, model: "EB-BS921ABY", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+1200万超广角+1000万长焦", price: 599, model: "SM-S921C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1200万", price: 199, model: "SM-S921D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 1999, model: "SM-S921E", platform: "闲鱼", note: "含处理器" },
      { name: "边框", spec: "铝合金边框", price: 399, model: "SM-S921F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "玻璃背板", price: 199, model: "SM-S921G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "SM-S921I", platform: "京东", note: "含充电IC" },
      { name: "底部扬声器", spec: "立体声扬声器", price: 59, model: "SM-S921J", platform: "拼多多", note: "含振动马达固定座" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "SM-S921K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "SM-S921L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "SM-S921M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "SM-S921N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装边框", desc: "取出铝合金边框，检查侧边按键和音量键是否正常，确认边框无变形或划痕", tip: "边框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入边框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装底部扬声器", desc: "将底部扬声器放入边框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入边框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入边框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入边框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入边框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐边框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐边框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "samsung-s24-repair",
    name: "三星 Galaxy S24 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["samsung", "三星", "galaxy", "手机维修", "屏幕更换", "s24"],
    parts: [
      { name: "Dynamic AMOLED屏幕", spec: "6.2英寸 2X", price: 999, model: "SM-S921B", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "SM-S921L", platform: "拼多多", note: "屏幕与边框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "SM-S921M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "SM-S921N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁边框", desc: "用酒精棉片清洁边框边缘的残留胶和灰尘", tip: "确保边框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在边框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐边框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐边框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合边框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "samsung-z-fold-5-assembly",
    name: "三星 Galaxy Z Fold5 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "极高",
    time: "10-14小时",
    budget: "¥8000-15000",
    budgetNum: 11000,
    keywords: ["samsung", "三星", "fold", "折叠屏", "手机组装"],
    parts: [
      { name: "内屏总成", spec: "7.6英寸 AMOLED柔性屏", price: 2999, model: "SM-F946B", platform: "京东", note: "含触控层、显示IC" },
      { name: "外屏", spec: "6.2英寸 AMOLED", price: 999, model: "SM-F946C", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "4400mAh 3.87V", price: 499, model: "EB-BF946ABY", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "铰链组件", spec: "隐形铰链", price: 1299, model: "SM-F946D", platform: "淘宝", note: "折叠屏核心部件" },
      { name: "主板", spec: "骁龙8 Gen 2", price: 2999, model: "SM-F946E", platform: "闲鱼", note: "含处理器" },
      { name: "后置摄像头模组", spec: "5000万主摄+1200万超广角+1000万长焦", price: 799, model: "SM-F946F", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1000万", price: 199, model: "SM-F946G", platform: "淘宝", note: "内屏前置摄像头" },
      { name: "边框", spec: "铝合金边框", price: 499, model: "SM-F946H", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖玻璃", spec: "玻璃背板", price: 299, model: "SM-F946I", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 99, model: "SM-F946J", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 79, model: "SM-F946K", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 59, model: "SM-F946L", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "防水密封胶", price: 25, model: "SM-F946M", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 12, model: "SM-F946N", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 79, model: "SM-F946O", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "折叠屏手机零件非常精密，务必在防静电环境下操作" },
      { title: "安装铰链组件", desc: "将铰链组件放置在工作台上，检查铰链开合是否顺畅，确认无变形或卡顿", tip: "铰链是折叠屏的核心部件，务必检查完好" },
      { title: "安装主板", desc: "将主板安装到铰链组件上，用螺丝固定，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器和振动马达", desc: "将扬声器和振动马达安装到机身对应位置，连接排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，安装到机身电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组安装到机身背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装边框", desc: "将边框安装到机身两侧，用螺丝固定，检查侧边按键是否正常", tip: "边框安装要对称，确保开合顺畅" },
      { title: "安装内屏", desc: "将内屏总成小心展开，对齐机身内侧，连接内屏排线到主板，用螺丝固定内屏支架", tip: "内屏是柔性屏，操作时要格外小心，避免弯折" },
      { title: "安装外屏", desc: "将外屏总成对齐机身外侧，连接外屏排线到主板，用螺丝固定外屏支架", tip: "外屏排线较脆弱，扣合时力度要轻" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组安装到内屏顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装后盖玻璃", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐机身，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能，测试折叠开合功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试折叠开合是否顺畅，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "samsung-z-fold-5-repair",
    name: "三星 Galaxy Z Fold5 内屏维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "极高",
    time: "4-6小时",
    budget: "¥3000-4000",
    budgetNum: 3400,
    keywords: ["samsung", "三星", "fold", "折叠屏", "手机维修", "内屏更换"],
    parts: [
      { name: "内屏总成", spec: "7.6英寸 AMOLED柔性屏", price: 2999, model: "SM-F946B", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 25, model: "SM-F946M", platform: "拼多多", note: "屏幕与机身防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "SM-F946N", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 39, model: "SM-F946O", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "折叠屏维修需要专业工具和经验" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖玻璃上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开内屏排线", desc: "断开内屏显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸内屏支架螺丝", desc: "用螺丝刀拧下内屏支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧内屏", desc: "将旧内屏小心从手机上取下，注意内屏是柔性屏，避免弯折", tip: "内屏较薄，操作时要格外小心" },
      { title: "清洁机身", desc: "用酒精棉片清洁机身边缘的残留胶和灰尘", tip: "确保机身干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在机身边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新内屏", desc: "将新内屏总成小心展开，对齐机身内侧", tip: "内屏是柔性屏，操作时要格外小心" },
      { title: "连接内屏排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装内屏支架", desc: "将内屏支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐机身，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合机身" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试内屏显示、触摸等功能，测试折叠开合功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试折叠开合是否顺畅", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 华为系列 ======
  {
    id: "huawei-mate-60-pro-assembly",
    name: "华为 Mate 60 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥5000-8500",
    budgetNum: 6200,
    keywords: ["huawei", "华为", "mate60pro", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 LTPO", price: 1199, model: "ALN-AL80", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5000mAh 3.87V", price: 349, model: "HB536378ECW", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+1200万超广角+4800万长焦", price: 899, model: "ALN-AL80C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1300万", price: 199, model: "ALN-AL80D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "麒麟9000S", price: 2299, model: "ALN-AL80E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 499, model: "ALN-AL80F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "素皮/玻璃后盖", price: 299, model: "ALN-AL80G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "ALN-AL80I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "ALN-AL80J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "ALN-AL80K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "ALN-AL80L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "ALN-AL80M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "ALN-AL80N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "huawei-mate-60-pro-repair",
    name: "华为 Mate 60 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1200-2000",
    budgetNum: 1500,
    keywords: ["huawei", "华为", "mate60pro", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 LTPO", price: 1199, model: "ALN-AL80", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "ALN-AL80L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "ALN-AL80M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "ALN-AL80N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "huawei-pura-80-ultra-assembly",
    name: "华为 Pura 80 Ultra 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥5200-8800",
    budgetNum: 6500,
    keywords: ["huawei", "华为", "pura80ultra", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.8英寸 LTPO", price: 1199, model: "BRA-AL00", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5200mAh 3.87V", price: 349, model: "HB536378ECW", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+4800万超广角+4800万长焦", price: 999, model: "BRA-AL00C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1300万", price: 199, model: "BRA-AL00D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "麒麟9000S", price: 2399, model: "BRA-AL00E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 499, model: "BRA-AL00F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "素皮/玻璃后盖", price: 299, model: "BRA-AL00G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "BRA-AL00I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "BRA-AL00J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "BRA-AL00K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "BRA-AL00L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "BRA-AL00M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "BRA-AL00N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "huawei-pura-80-ultra-repair",
    name: "华为 Pura 80 Ultra 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1200-2000",
    budgetNum: 1500,
    keywords: ["huawei", "华为", "pura80ultra", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.8英寸 LTPO", price: 1199, model: "BRA-AL00", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "BRA-AL00L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "BRA-AL00M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "BRA-AL00N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "huawei-watch-4-pro-assembly",
    name: "华为 Watch 4 Pro 组装教程",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "assembly",
    difficulty: "较高",
    time: "3-4小时",
    budget: "¥2000-3500",
    budgetNum: 2600,
    keywords: ["huawei", "华为", "watch4pro", "手表", "智能穿戴组装"],
    parts: [
      { name: "AMOLED屏幕", spec: "1.5英寸", price: 599, model: "FTN-B19", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "570mAh 3.87V", price: 149, model: "HB505795ECW", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "麒麟A2", price: 999, model: "FTN-B19E", platform: "闲鱼", note: "含处理器" },
      { name: "表带", spec: "氟橡胶表带", price: 99, model: "FTN-B19S", platform: "京东", note: "运动款" },
      { name: "心率传感器", spec: "PPG光学心率", price: 99, model: "FTN-B19H", platform: "淘宝", note: "含血氧传感器" },
      { name: "边框", spec: "钛金属边框", price: 399, model: "FTN-B19F", platform: "淘宝", note: "含表冠和按键" },
      { name: "后盖", spec: "陶瓷后盖", price: 199, model: "FTN-B19G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "防水胶", spec: "防水密封胶", price: 12, model: "FTN-B19L", platform: "拼多多", note: "后盖与屏幕防水胶" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 5, model: "FTN-B19M", platform: "拼多多", note: "含后盖螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "FTN-B19N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "手表零件非常小，务必在防静电环境下操作" },
      { title: "安装边框", desc: "取出钛金属边框，检查表冠和按键是否正常，确认边框无变形", tip: "边框是手表的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入边框对应位置，用螺丝固定主板支架", tip: "螺丝位置和长度必须对应" },
      { title: "连接心率传感器", desc: "将心率传感器安装到主板对应接口，扣紧排线座", tip: "传感器排线较脆弱，扣合时力度要轻" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入边框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐边框，压紧", tip: "防水胶涂抹要均匀" },
      { title: "拧入后盖螺丝", desc: "将后盖螺丝拧入边框四周", tip: "螺丝拧紧力度要适中" },
      { title: "安装屏幕", desc: "将屏幕总成对齐边框正面，连接屏幕排线到主板", tip: "屏幕排线要对准接口" },
      { title: "安装表带", desc: "将表带安装到表耳处，扣紧弹簧针", tip: "弹簧针要完全卡入卡槽" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、心率监测等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间不要移动" },
      { title: "最终检查", desc: "检查手表外观是否有缝隙，测试防水功能（可选）", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "huawei-watch-4-pro-repair",
    name: "华为 Watch 4 Pro 屏幕维修",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "repair",
    difficulty: "较高",
    time: "1.5-2小时",
    budget: "¥600-1000",
    budgetNum: 750,
    keywords: ["huawei", "华为", "watch4pro", "手表", "智能穿戴维修", "屏幕更换"],
    parts: [
      { name: "AMOLED屏幕", spec: "1.5英寸", price: 599, model: "FTN-B19", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "FTN-B19L", platform: "拼多多", note: "屏幕与边框防水胶" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 25, model: "FTN-B19N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台" },
      { title: "关闭手表", desc: "长按电源键关机", tip: "务必先关机再操作" },
      { title: "拆卸表带", desc: "用工具按下弹簧针，取下表带", tip: "注意不要丢失弹簧针" },
      { title: "拆卸后盖螺丝", desc: "用螺丝刀拧下后盖四周的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "取下后盖", desc: "用塑料撬片轻轻撬开后盖", tip: "操作要慢，避免损坏内部零件" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手表上取下", tip: "屏幕较薄，操作时要格外小心" },
      { title: "清洁边框", desc: "用酒精棉片清洁边框边缘的残留胶和灰尘", tip: "确保边框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在边框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐边框正面", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐边框，压紧，确保四周贴合", tip: "后盖边缘要完全贴合边框" },
      { title: "拧入后盖螺丝", desc: "将后盖螺丝拧入边框四周", tip: "螺丝拧紧力度要适中" },
      { title: "安装表带", desc: "将表带安装到表耳处，扣紧弹簧针", tip: "弹簧针要完全卡入卡槽" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手表平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 小米系列 ======
  {
    id: "xiaomi-14-ultra-assembly",
    name: "小米 14 Ultra 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4800-8500",
    budgetNum: 6000,
    keywords: ["xiaomi", "小米", "14ultra", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.73英寸 2K AMOLED", price: 999, model: "23127PN5BC", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5300mAh 3.87V", price: 299, model: "BM5Q", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+5000万超广角+5000万长焦+5000万潜望", price: 999, model: "23127PN5BC-C", platform: "淘宝", note: "四摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 199, model: "23127PN5BC-D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 2199, model: "23127PN5BC-E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "钛金属中框", price: 399, model: "23127PN5BC-F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "陶瓷后盖", price: 249, model: "23127PN5BC-G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "23127PN5BC-I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "23127PN5BC-J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "23127PN5BC-K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "23127PN5BC-L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "23127PN5BC-M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "23127PN5BC-N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出钛金属中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "xiaomi-14-ultra-repair",
    name: "小米 14 Ultra 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["xiaomi", "小米", "14ultra", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.73英寸 2K AMOLED", price: 999, model: "23127PN5BC", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "23127PN5BC-L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "23127PN5BC-M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "23127PN5BC-N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "xiaomi-14-assembly",
    name: "小米 14 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥3800-6500",
    budgetNum: 4800,
    keywords: ["xiaomi", "小米", "14", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.36英寸 1.5K AMOLED", price: 799, model: "23127PN0CC", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "4610mAh 3.87V", price: 249, model: "BM5M", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+5000万超广角+5000万长焦", price: 599, model: "23127PN0CC-C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 149, model: "23127PN0CC-D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 1899, model: "23127PN0CC-E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 299, model: "23127PN0CC-F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 199, model: "23127PN0CC-G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 69, model: "23127PN0CC-I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 49, model: "23127PN0CC-J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 39, model: "23127PN0CC-K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 15, model: "23127PN0CC-L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 6, model: "23127PN0CC-M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "23127PN0CC-N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "xiaomi-14-repair",
    name: "小米 14 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥800-1400",
    budgetNum: 1000,
    keywords: ["xiaomi", "小米", "14", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.36英寸 1.5K AMOLED", price: 799, model: "23127PN0CC", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "23127PN0CC-L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "23127PN0CC-M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "23127PN0CC-N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "xiaomi-redmi-k80-assembly",
    name: "红米 K80 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥3000-5500",
    budgetNum: 4000,
    keywords: ["xiaomi", "小米", "redmi", "k80", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.67英寸 AMOLED", price: 599, model: "24127PN0CC", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "6000mAh 3.87V", price: 199, model: "BM5Q", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+5000万超广角+5000万长焦", price: 399, model: "24127PN0CC-C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "2000万", price: 99, model: "24127PN0CC-D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 4", price: 1599, model: "24127PN0CC-E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 249, model: "24127PN0CC-F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 149, model: "24127PN0CC-G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 59, model: "24127PN0CC-I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 39, model: "24127PN0CC-J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 29, model: "24127PN0CC-K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "防水密封胶", price: 12, model: "24127PN0CC-L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 5, model: "24127PN0CC-M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "24127PN0CC-N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "xiaomi-redmi-k80-repair",
    name: "红米 K80 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2.5小时",
    budget: "¥600-1100",
    budgetNum: 800,
    keywords: ["xiaomi", "小米", "redmi", "k80", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.67英寸 AMOLED", price: 599, model: "24127PN0CC", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "24127PN0CC-L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "24127PN0CC-M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 25, model: "24127PN0CC-N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "xiaomi-band-9-assembly",
    name: "小米手环 9 组装教程",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "assembly",
    difficulty: "简单",
    time: "1-2小时",
    budget: "¥250-450",
    budgetNum: 320,
    keywords: ["xiaomi", "小米", "band9", "手环", "智能穿戴组装"],
    parts: [
      { name: "AMOLED屏幕", spec: "1.62英寸", price: 89, model: "M2401B1", platform: "京东", note: "含触控层、显示IC" },
      { name: "电池", spec: "233mAh 3.87V", price: 39, model: "BM233", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "主板", spec: "芯片组", price: 99, model: "M2401B1-E", platform: "闲鱼", note: "含处理器" },
      { name: "表带", spec: "硅胶表带", price: 29, model: "M2401B1-S", platform: "京东", note: "运动款" },
      { name: "传感器", spec: "PPG心率传感器", price: 29, model: "M2401B1-H", platform: "淘宝", note: "含血氧传感器" },
      { name: "外壳", spec: "塑料外壳", price: 29, model: "M2401B1-F", platform: "淘宝", note: "含底壳和按键" },
      { name: "防水胶", spec: "防水密封胶", price: 8, model: "M2401B1-L", platform: "拼多多", note: "外壳防水胶" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 3, model: "M2401B1-M", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 19, model: "M2401B1-N", platform: "京东", note: "含撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "手环零件非常小，务必在防静电环境下操作" },
      { title: "安装外壳", desc: "取出塑料外壳，检查底壳和按键是否正常，确认外壳无变形", tip: "外壳是手环的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入外壳对应位置，用螺丝固定主板", tip: "螺丝位置和长度必须对应" },
      { title: "连接传感器", desc: "将传感器安装到主板对应接口，扣紧排线座", tip: "传感器排线较脆弱，扣合时力度要轻" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入外壳电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装屏幕", desc: "将屏幕总成对齐外壳正面，连接屏幕排线到主板", tip: "屏幕排线要对准接口" },
      { title: "粘贴防水胶", desc: "在外壳边缘均匀涂抹防水胶，确保对齐", tip: "防水胶涂抹要均匀" },
      { title: "安装底壳", desc: "将底壳对齐外壳，压紧", tip: "底壳边缘要完全贴合外壳" },
      { title: "拧入螺丝", desc: "将外壳螺丝拧入底壳四周", tip: "螺丝拧紧力度要适中" },
      { title: "安装表带", desc: "将表带安装到外壳两侧，扣紧弹簧针", tip: "弹簧针要完全卡入卡槽" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、心率监测等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手环平放静置30分钟，让防水胶固化", tip: "固化期间不要移动" },
      { title: "最终检查", desc: "检查手环外观是否有缝隙，测试防水功能（可选）", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "xiaomi-band-9-repair",
    name: "小米手环 9 屏幕维修",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "repair",
    difficulty: "简单",
    time: "0.5-1小时",
    budget: "¥90-150",
    budgetNum: 110,
    keywords: ["xiaomi", "小米", "band9", "手环", "智能穿戴维修", "屏幕更换"],
    parts: [
      { name: "AMOLED屏幕", spec: "1.62英寸", price: 89, model: "M2401B1", platform: "京东", note: "含触控层、显示IC" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 8, model: "M2401B1-L", platform: "拼多多", note: "外壳防水胶" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 15, model: "M2401B1-N", platform: "京东", note: "含撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台" },
      { title: "关闭手环", desc: "长按电源键关机", tip: "务必先关机再操作" },
      { title: "拆卸表带", desc: "用工具按下弹簧针，取下表带", tip: "注意不要丢失弹簧针" },
      { title: "拆卸外壳螺丝", desc: "用螺丝刀拧下底壳四周的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "取下底壳", desc: "用塑料撬片轻轻撬开底壳", tip: "操作要慢，避免损坏内部零件" },
      { title: "断开电池排线", desc: "打开底壳后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "断开屏幕显示排线和触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手环上取下", tip: "屏幕较薄，操作时要格外小心" },
      { title: "清洁外壳", desc: "用酒精棉片清洁外壳边缘的残留胶和灰尘", tip: "确保外壳干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在外壳边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐外壳正面", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装底壳", desc: "将底壳对齐外壳，压紧，确保四周贴合", tip: "底壳边缘要完全贴合外壳" },
      { title: "拧入外壳螺丝", desc: "将外壳螺丝拧入底壳四周", tip: "螺丝拧紧力度要适中" },
      { title: "安装表带", desc: "将表带安装到外壳两侧，扣紧弹簧针", tip: "弹簧针要完全卡入卡槽" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手环平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== OPPO 系列 ======
  {
    id: "oppo-find-x8-ultra-assembly",
    name: "OPPO Find X8 Ultra 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4800-8500",
    budgetNum: 6000,
    keywords: ["oppo", "findx8ultra", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 2K AMOLED", price: 999, model: "PHZ110", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5600mAh 3.87V", price: 299, model: "BLP999", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+5000万超广角+5000万长焦", price: 799, model: "PHZ110C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 199, model: "PHZ110D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 4", price: 2199, model: "PHZ110E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "钛金属中框", price: 399, model: "PHZ110F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "陶瓷后盖", price: 249, model: "PHZ110G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "PHZ110I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "PHZ110J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "PHZ110K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "PHZ110L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "PHZ110M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "PHZ110N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出钛金属中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "oppo-find-x8-ultra-repair",
    name: "OPPO Find X8 Ultra 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["oppo", "findx8ultra", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 2K AMOLED", price: 999, model: "PHZ110", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "PHZ110L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "PHZ110M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "PHZ110N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "oppo-reno-12-assembly",
    name: "OPPO Reno 12 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥3000-5500",
    budgetNum: 4000,
    keywords: ["oppo", "reno12", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.7英寸 AMOLED", price: 699, model: "PJV110", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5000mAh 3.87V", price: 199, model: "BLP989", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+5000万超广角+3200万人像", price: 499, model: "PJV110C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 149, model: "PJV110D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "天玑9200+", price: 1499, model: "PJV110E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 249, model: "PJV110F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 149, model: "PJV110G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 59, model: "PJV110I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 39, model: "PJV110J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 29, model: "PJV110K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "防水密封胶", price: 12, model: "PJV110L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 5, model: "PJV110M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "PJV110N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "oppo-reno-12-repair",
    name: "OPPO Reno 12 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2.5小时",
    budget: "¥700-1200",
    budgetNum: 900,
    keywords: ["oppo", "reno12", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.7英寸 AMOLED", price: 699, model: "PJV110", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 12, model: "PJV110L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "PJV110M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 25, model: "PJV110N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== vivo 系列 ======
  {
    id: "vivo-x100s-pro-assembly",
    name: "vivo X100s Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4800-8500",
    budgetNum: 6000,
    keywords: ["vivo", "x100spro", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.78英寸 AMOLED", price: 999, model: "V2354A", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5400mAh 3.87V", price: 299, model: "B-V8", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+5000万超广角+5000万长焦", price: 899, model: "V2354A-C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 199, model: "V2354A-D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "天玑9300", price: 2099, model: "V2354A-E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "钛金属中框", price: 399, model: "V2354A-F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 249, model: "V2354A-G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "V2354A-I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "V2354A-J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "V2354A-K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "V2354A-L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "V2354A-M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "V2354A-N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出钛金属中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "vivo-x100s-pro-repair",
    name: "vivo X100s Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["vivo", "x100spro", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.78英寸 AMOLED", price: 999, model: "V2354A", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "V2354A-L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "V2354A-M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "V2354A-N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "vivo-iqoo-13-assembly",
    name: "vivo iQOO 13 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥3800-6500",
    budgetNum: 4800,
    keywords: ["vivo", "iqoo13", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.78英寸 AMOLED", price: 799, model: "V2408A", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "6000mAh 3.87V", price: 249, model: "B-V9", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+5000万超广角+5000万长焦", price: 499, model: "V2408A-C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "2000万", price: 99, model: "V2408A-D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 至尊版", price: 1999, model: "V2408A-E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 299, model: "V2408A-F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 199, model: "V2408A-G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 69, model: "V2408A-I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 49, model: "V2408A-J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 39, model: "V2408A-K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "防水密封胶", price: 15, model: "V2408A-L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 6, model: "V2408A-M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "V2408A-N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "vivo-iqoo-13-repair",
    name: "vivo iQOO 13 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2.5小时",
    budget: "¥800-1400",
    budgetNum: 1000,
    keywords: ["vivo", "iqoo13", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.78英寸 AMOLED", price: 799, model: "V2408A", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "V2408A-L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "V2408A-M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "V2408A-N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 一加系列 ======
  {
    id: "oneplus-13-assembly",
    name: "一加 13 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥3800-6500",
    budgetNum: 4800,
    keywords: ["oneplus", "一加", "13", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 AMOLED", price: 799, model: "PJD110", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "6000mAh 3.87V", price: 249, model: "BLP1000", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头", spec: "5000万主摄+5000万超广角+5000万长焦", price: 499, model: "PJD110C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "3200万", price: 149, model: "PJD110D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 至尊版", price: 1999, model: "PJD110E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 299, model: "PJD110F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 199, model: "PJD110G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 69, model: "PJD110I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 49, model: "PJD110J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 39, model: "PJD110K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "防水密封胶", price: 15, model: "PJD110L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 6, model: "PJD110M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "PJD110N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "oneplus-13-repair",
    name: "一加 13 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "中等",
    time: "1.5-2.5小时",
    budget: "¥800-1400",
    budgetNum: 1000,
    keywords: ["oneplus", "一加", "13", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.82英寸 AMOLED", price: 799, model: "PJD110", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 15, model: "PJD110L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "PJD110M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "PJD110N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 荣耀系列 ======
  {
    id: "honor-magic6-pro-assembly",
    name: "荣耀 Magic6 Pro 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4800-8500",
    budgetNum: 6000,
    keywords: ["honor", "荣耀", "magic6pro", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.8英寸 AMOLED", price: 999, model: "BVL-AN00", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5600mAh 3.87V", price: 299, model: "HB566489EFW", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+5000万超广角+5000万长焦", price: 799, model: "BVL-AN00C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1300万", price: 149, model: "BVL-AN00D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 1999, model: "BVL-AN00E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "钛金属中框", price: 399, model: "BVL-AN00F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 249, model: "BVL-AN00G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "BVL-AN00I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "BVL-AN00J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "BVL-AN00K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP68级防水密封胶", price: 18, model: "BVL-AN00L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "BVL-AN00M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "BVL-AN00N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出钛金属中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电和NFC功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "honor-magic6-pro-repair",
    name: "荣耀 Magic6 Pro 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["honor", "荣耀", "magic6pro", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.8英寸 AMOLED", price: 999, model: "BVL-AN00", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "BVL-AN00L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "BVL-AN00M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "BVL-AN00N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== 索尼系列 ======
  {
    id: "sony-xperia-1-vi-assembly",
    name: "索尼 Xperia 1 VI 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥4800-8500",
    budgetNum: 6000,
    keywords: ["sony", "索尼", "xperia1vi", "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.5英寸 4K AMOLED", price: 999, model: "XQ-EC72", platform: "京东", note: "含触控层、显示IC、听筒" },
      { name: "电池", spec: "5000mAh 3.87V", price: 299, model: "LIP1721ERPC", platform: "京东", note: "原装品质，带排线和胶贴" },
      { name: "后置摄像头模组", spec: "5000万主摄+1200万超广角+1200万长焦", price: 699, model: "XQ-EC72C", platform: "淘宝", note: "三摄模组" },
      { name: "前置摄像头", spec: "1200万", price: 149, model: "XQ-EC72D", platform: "淘宝", note: "含自拍传感器" },
      { name: "主板", spec: "骁龙8 Gen 3", price: 2199, model: "XQ-EC72E", platform: "闲鱼", note: "含处理器" },
      { name: "中框", spec: "铝合金中框", price: 399, model: "XQ-EC72F", platform: "淘宝", note: "含侧边按键" },
      { name: "后盖", spec: "玻璃后盖", price: 249, model: "XQ-EC72G", platform: "拼多多", note: "含无线充电线圈" },
      { name: "充电口排线", spec: "USB-C接口", price: 79, model: "XQ-EC72I", platform: "京东", note: "含充电IC" },
      { name: "扬声器", spec: "立体声扬声器", price: 59, model: "XQ-EC72J", platform: "拼多多", note: "含振动马达" },
      { name: "振动马达", spec: "线性马达", price: 49, model: "XQ-EC72K", platform: "淘宝", note: "横向线性振动" },
      { name: "防水胶", spec: "IP65级防水密封胶", price: 18, model: "XQ-EC72L", platform: "拼多多", note: "后盖与屏幕防水胶套装" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 8, model: "XQ-EC72M", platform: "拼多多", note: "含底部螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "XQ-EC72N", platform: "京东", note: "含加热台、吸盘、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "务必在防静电环境下操作，避免静电损坏主板" },
      { title: "安装中框", desc: "取出铝合金中框，检查侧边按键和音量键是否正常，确认中框无变形或划痕", tip: "中框是整个手机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架，注意螺丝位置和长短", tip: "螺丝位置和长度必须对应，否则会顶坏屏幕" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座，用螺丝固定排线支架", tip: "充电口排线较脆弱，扣合时力度要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线到主板", tip: "扬声器有正反方向，注意标识" },
      { title: "安装振动马达", desc: "将线性振动马达放入中框对应位置，连接马达排线到主板", tip: "马达固定座需要对准位置" },
      { title: "安装电池", desc: "将电池胶贴粘贴在电池背面，放入中框电池仓，连接电池排线到主板", tip: "电池胶贴要粘贴牢固，防止电池松动" },
      { title: "安装后置摄像头", desc: "将后置摄像头模组放入中框背部位置，连接摄像头排线到主板，用螺丝固定", tip: "摄像头排线要对准接口" },
      { title: "安装前置摄像头", desc: "将前置摄像头模组放入中框顶部位置，连接排线到主板", tip: "前置摄像头排线非常脆弱，操作需格外小心" },
      { title: "安装屏幕总成", desc: "将屏幕总成对齐中框顶部，向下扣合，连接屏幕排线到主板，扣紧屏幕支架", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装后盖", desc: "在后盖边缘均匀涂抹防水胶，将后盖对齐中框，从顶部向下压紧", tip: "防水胶涂抹要均匀，避免过多或过少" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中，过紧会损坏螺纹" },
      { title: "功能测试", desc: "按下电源键开机，测试屏幕显示、触摸、摄像头、扬声器、充电等功能", tip: "测试通过后再进行后续步骤" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间不要移动或使用手机" },
      { title: "最终检查", desc: "检查手机外观是否有缝隙，测试无线充电功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "sony-xperia-1-vi-repair",
    name: "索尼 Xperia 1 VI 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥1000-1700",
    budgetNum: 1300,
    keywords: ["sony", "索尼", "xperia1vi", "手机维修", "屏幕更换"],
    parts: [
      { name: "OLED屏幕总成", spec: "6.5英寸 4K AMOLED", price: 999, model: "XQ-EC72", platform: "京东", note: "含触控层、显示IC、听筒、前置摄像头" },
      { name: "防水胶", spec: "屏幕防水密封胶", price: 18, model: "XQ-EC72L", platform: "拼多多", note: "屏幕与中框防水胶" },
      { name: "屏幕固定螺丝", spec: "屏幕支架螺丝", price: 5, model: "XQ-EC72M", platform: "拼多多", note: "十字小螺丝" },
      { name: "拆机工具", spec: "屏幕更换专用工具", price: 29, model: "XQ-EC72N", platform: "京东", note: "含吸盘、撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备加热台（或热风枪）、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "建议使用专业加热台，温度控制在80-90°C" },
      { title: "关闭手机", desc: "长按电源键和音量减键，滑动关机", tip: "务必先关机再操作" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下充电口两侧的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上，设置温度80°C，加热2-3分钟软化防水胶", tip: "加热时间不要过长，避免损坏内部零件" },
      { title: "打开后盖", desc: "用吸盘吸附在后盖上方，轻轻拉起，同时用塑料撬片沿边缘划开防水胶", tip: "操作要慢，避免划伤后盖或损坏排线" },
      { title: "断开电池排线", desc: "打开后盖后，先用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "拆卸屏幕支架螺丝", desc: "用螺丝刀拧下屏幕支架上的螺丝，取下支架", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "取下旧屏幕", desc: "将旧屏幕从手机上取下，注意屏幕底部连接的听筒和前置摄像头", tip: "如果屏幕总成包含前置摄像头，需要一起取下" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘的残留胶和灰尘", tip: "确保中框干净无残留" },
      { title: "粘贴防水胶", desc: "将新的防水胶粘贴在中框边缘，确保对齐", tip: "防水胶有正反面，注意标识" },
      { title: "安装新屏幕", desc: "将新屏幕总成对齐中框顶部，向下扣合", tip: "屏幕排线朝向主板方向" },
      { title: "连接屏幕排线", desc: "依次扣合触控排线和显示排线", tip: "排线扣合后要按压到位，确保接触良好" },
      { title: "安装屏幕支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框，从顶部向下压紧，确保四周贴合", tip: "后盖边缘要完全贴合中框" },
      { title: "拧入底部螺丝", desc: "将底部螺丝拧入充电口两侧", tip: "螺丝拧紧力度要适中" },
      { title: "开机测试", desc: "按下电源键开机，测试屏幕显示、触摸等功能", tip: "如果触摸无法使用，可能需要重新连接排线" },
      { title: "静置固化", desc: "将手机平放静置30分钟，让防水胶固化", tip: "固化期间避免弯折手机" },
      { title: "最终检查", desc: "检查屏幕边缘是否有缝隙，测试防水功能（可选）", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "sony-wh-1000xm5-assembly",
    name: "索尼 WH-1000XM5 组装教程",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "assembly",
    difficulty: "中等",
    time: "2-4小时",
    budget: "¥1000-2000",
    budgetNum: 1400,
    keywords: ["sony", "索尼", "wh1000xm5", "耳机", "音频设备组装"],
    parts: [
      { name: "扬声器单元", spec: "30mm 动态驱动", price: 199, model: "WH-1000XM5-S", platform: "京东", note: "含振膜和磁铁" },
      { name: "电池", spec: "锂电池 3.87V", price: 99, model: "LIP1706ERPC", platform: "京东", note: "原装品质，带保护板" },
      { name: "蓝牙主板", spec: "蓝牙5.0", price: 299, model: "WH-1000XM5-M", platform: "淘宝", note: "含降噪芯片" },
      { name: "降噪麦克风", spec: "4麦克风阵列", price: 99, model: "WH-1000XM5-MIC", platform: "淘宝", note: "含麦克风支架" },
      { name: "耳罩", spec: "蛋白皮耳罩", price: 79, model: "WH-1000XM5-E", platform: "京东", note: "含记忆海绵" },
      { name: "头梁", spec: "镁合金头梁", price: 99, model: "WH-1000XM5-H", platform: "淘宝", note: "含伸缩调节机构" },
      { name: "外壳", spec: "塑料外壳", price: 49, model: "WH-1000XM5-C", platform: "拼多多", note: "左右耳外壳" },
      { name: "连接线", spec: "音频排线", price: 29, model: "WH-1000XM5-W", platform: "淘宝", note: "耳机内部连接线" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 5, model: "WH-1000XM5-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 25, model: "WH-1000XM5-T", platform: "京东", note: "含撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "耳机零件较小，务必在防静电环境下操作" },
      { title: "安装头梁", desc: "取出镁合金头梁，检查伸缩调节机构是否顺畅，确认无变形", tip: "头梁是耳机的骨架，务必检查完好" },
      { title: "安装外壳", desc: "将左右耳外壳安装到头梁两端，用螺丝固定", tip: "螺丝位置和长度必须对应" },
      { title: "安装蓝牙主板", desc: "将蓝牙主板放入外壳对应位置，连接主板排线", tip: "主板排线较脆弱，扣合时力度要轻" },
      { title: "安装降噪麦克风", desc: "将降噪麦克风安装到外壳对应位置，连接麦克风排线到主板", tip: "麦克风有正反方向，注意标识" },
      { title: "安装扬声器单元", desc: "将扬声器单元安装到外壳内部，连接扬声器排线到主板", tip: "扬声器有正负极，注意标识" },
      { title: "安装电池", desc: "将电池放入外壳电池仓，连接电池排线到主板", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装连接线", desc: "连接左右耳之间的音频排线", tip: "排线要对准接口" },
      { title: "安装耳罩", desc: "将蛋白皮耳罩安装到耳机外壳上，压紧", tip: "耳罩有正反面，注意标识" },
      { title: "功能测试", desc: "打开耳机电源，测试蓝牙连接、降噪功能、音质等", tip: "测试通过后再进行后续步骤" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙，测试伸缩调节功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "sony-wh-1000xm5-repair",
    name: "索尼 WH-1000XM5 电池维修",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥100-200",
    budgetNum: 140,
    keywords: ["sony", "索尼", "wh1000xm5", "耳机", "音频设备维修", "电池更换"],
    parts: [
      { name: "电池", spec: "锂电池 3.87V", price: 99, model: "LIP1706ERPC", platform: "京东", note: "原装品质，带保护板" },
      { name: "拆机工具", spec: "电池更换专用工具", price: 15, model: "WH-1000XM5-T", platform: "京东", note: "含撬片、螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备撬片、螺丝刀、防静电手环", tip: "建议使用专业拆机工具" },
      { title: "关闭耳机", desc: "长按电源键关机", tip: "务必先关机再操作" },
      { title: "拆卸耳罩", desc: "用撬片轻轻撬开耳罩，取下来", tip: "操作要慢，避免损坏耳罩" },
      { title: "拆卸外壳螺丝", desc: "用螺丝刀拧下外壳上的螺丝，取下外壳", tip: "螺丝长度相同，可以放在一起" },
      { title: "断开电池排线", desc: "用塑料撬棒断开电池排线，确保安全", tip: "断开电池是安全操作的第一步" },
      { title: "取下旧电池", desc: "将旧电池从外壳上取下", tip: "电池通过胶贴固定，可能需要轻轻加热" },
      { title: "安装新电池", desc: "将新电池放入外壳电池仓", tip: "电池有正负极，注意标识" },
      { title: "连接电池排线", desc: "将电池排线扣合到主板上", tip: "电池排线扣合后轻轻向上拉一下确认扣紧" },
      { title: "安装外壳", desc: "将外壳放回原位，用螺丝固定", tip: "螺丝拧紧力度要适中" },
      { title: "安装耳罩", desc: "将耳罩安装到耳机外壳上，压紧", tip: "耳罩有正反面，注意标识" },
      { title: "开机测试", desc: "打开耳机电源，测试蓝牙连接、降噪功能等", tip: "如果无法开机，可能需要重新连接排线" },
      { title: "最终检查", desc: "检查耳机外观是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  {
    id: "sony-alpha-7-v-assembly",
    name: "索尼 Alpha 7 V 组装教程",
    icon: "📷",
    category: "摄影摄像与工业",
    categoryId: 19,
    type: "assembly",
    difficulty: "较高",
    time: "8-12小时",
    budget: "¥5000-12000",
    budgetNum: 8000,
    keywords: ["sony", "索尼", "alpha7v", "相机", "摄影设备组装"],
    parts: [
      { name: "镜头", spec: "FE 24-70mm F2.8", price: 1499, model: "SEL2470GM2", platform: "京东", note: "全画幅标准变焦" },
      { name: "图像传感器", spec: "全画幅 3300万像素", price: 1999, model: "IMX989", platform: "淘宝", note: "含低通滤镜" },
      { name: "主板", spec: "影像处理器", price: 1999, model: "A7V-MAIN", platform: "闲鱼", note: "含处理器" },
      { name: "防抖模块", spec: "5轴防抖", price: 399, model: "A7V-IS", platform: "淘宝", note: "含防抖传感器" },
      { name: "电池", spec: "NP-FZ100", price: 149, model: "NP-FZ100", platform: "京东", note: "原装品质" },
      { name: "快门组件", spec: "机械快门", price: 299, model: "A7V-SHUTTER", platform: "淘宝", note: "含快门幕帘" },
      { name: "机身外壳", spec: "镁合金机身", price: 599, model: "A7V-BODY", platform: "淘宝", note: "含握把和接口" },
      { name: "取景器", spec: "OLED电子取景器", price: 499, model: "A7V-EVF", platform: "淘宝", note: "369万像素" },
      { name: "LCD屏幕", spec: "3.2英寸", price: 399, model: "A7V-LCD", platform: "淘宝", note: "含翻转屏机构" },
      { name: "存储卡插槽", spec: "双SD卡槽", price: 99, model: "A7V-SD", platform: "淘宝", note: "含卡槽盖" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 15, model: "A7V-SCREW", platform: "拼多多", note: "含机身螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 79, model: "A7V-T", platform: "京东", note: "含专用螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "相机零件非常精密，务必在洁净室环境下操作" },
      { title: "安装机身外壳", desc: "取出镁合金机身外壳，检查握把和接口是否正常，确认机身无变形", tip: "机身是相机的骨架，务必检查完好" },
      { title: "安装主板", desc: "将主板放入机身对应位置，用螺丝固定主板支架", tip: "螺丝位置和长度必须对应" },
      { title: "安装图像传感器", desc: "将图像传感器安装到防抖模块上，连接传感器排线到主板", tip: "传感器非常精密，操作时要格外小心" },
      { title: "安装防抖模块", desc: "将防抖模块安装到机身内部，连接防抖排线到主板", tip: "防抖模块有固定位置，需对准" },
      { title: "安装快门组件", desc: "将快门组件安装到机身内部，连接快门排线到主板", tip: "快门幕帘非常脆弱，避免触碰" },
      { title: "安装取景器", desc: "将OLED电子取景器安装到机身顶部，连接取景器排线到主板", tip: "取景器排线较脆弱，扣合时力度要轻" },
      { title: "安装LCD屏幕", desc: "将LCD屏幕安装到机身背面，连接屏幕排线到主板", tip: "屏幕排线有两条，需依次连接并扣紧" },
      { title: "安装存储卡插槽", desc: "将存储卡插槽安装到机身侧面，连接排线到主板", tip: "卡槽盖要对准位置" },
      { title: "安装电池仓", desc: "将电池仓安装到机身底部，连接电池触点排线到主板", tip: "电池触点要清洁" },
      { title: "安装镜头", desc: "将镜头安装到机身上，旋转锁定", tip: "FE卡口要对准红点" },
      { title: "功能测试", desc: "插入电池，打开相机电源，测试对焦、曝光、快门等功能", tip: "测试通过后再进行后续步骤" },
      { title: "最终检查", desc: "检查相机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "sony-alpha-7-v-repair",
    name: "索尼 Alpha 7 V 快门维修",
    icon: "📷",
    category: "摄影摄像与工业",
    categoryId: 19,
    type: "repair",
    difficulty: "较高",
    time: "3-5小时",
    budget: "¥300-600",
    budgetNum: 450,
    keywords: ["sony", "索尼", "alpha7v", "相机", "摄影设备维修", "快门更换"],
    parts: [
      { name: "快门组件", spec: "机械快门", price: 299, model: "A7V-SHUTTER", platform: "淘宝", note: "含快门幕帘" },
      { name: "拆机工具", spec: "快门更换专用工具", price: 39, model: "A7V-T", platform: "京东", note: "含专用螺丝刀、撬棒" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备专用螺丝刀、塑料撬棒、防静电手环", tip: "建议使用专业拆机工具" },
      { title: "关闭相机", desc: "关闭相机电源，取出电池", tip: "务必先关机并取出电池" },
      { title: "拆卸镜头", desc: "按下镜头释放按钮，旋转取下镜头", tip: "镜头取下后，注意保护传感器" },
      { title: "拆卸机身外壳", desc: "用螺丝刀拧下机身外壳上的螺丝，取下外壳", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "断开快门排线", desc: "用塑料撬棒断开快门组件的排线", tip: "排线座有扣位，向上挑起即可打开" },
      { title: "取下旧快门", desc: "将旧快门组件从机身上取下", tip: "快门幕帘非常脆弱，避免触碰" },
      { title: "安装新快门", desc: "将新快门组件安装到机身对应位置", tip: "快门组件有固定位置，需对准" },
      { title: "连接快门排线", desc: "将快门排线扣合到主板上", tip: "排线扣合后要按压到位" },
      { title: "安装机身外壳", desc: "将机身外壳放回原位，用螺丝固定", tip: "螺丝位置和长度要对应" },
      { title: "安装镜头", desc: "将镜头安装到机身上，旋转锁定", tip: "FE卡口要对准红点" },
      { title: "插入电池", desc: "将电池插入电池仓", tip: "确保电池接触良好" },
      { title: "开机测试", desc: "打开相机电源，测试快门释放、连拍等功能", tip: "如果快门无法释放，可能需要重新连接排线" },
      { title: "最终检查", desc: "检查相机外观是否有缝隙", tip: "建议在完成后进行一次完整功能测试" }
    ]
  },
  // ====== DJI 大疆无人机系列 ======
  {
    id: "dji-mavic-3-pro-assembly",
    name: "大疆 Mavic 3 Pro 组装教程",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "assembly",
    difficulty: "较高",
    time: "10-16小时",
    budget: "¥5000-12000",
    budgetNum: 8000,
    keywords: ["dji", "大疆", "mavic3pro", "无人机", "无人机组装"],
    parts: [
      { name: "飞行控制器", spec: "M3 Pro飞控", price: 1299, model: "DJI-M3P-FC", platform: "京东", note: "含IMU和罗盘" },
      { name: "无刷电机", spec: "2806电机 4个", price: 199, model: "DJI-M3P-MOTOR", platform: "京东", note: "含电机座" },
      { name: "电调", spec: "4合1电调", price: 99, model: "DJI-M3P-ESC", platform: "淘宝", note: "含连接线" },
      { name: "螺旋桨", spec: "9453S桨叶", price: 49, model: "DJI-M3P-PROP", platform: "京东", note: "正反桨各4个" },
      { name: "锂电池", spec: "5000mAh 15.4V", price: 399, model: "DJI-M3P-BAT", platform: "京东", note: "原装品质" },
      { name: "GPS模块", spec: "GNSS模块", price: 299, model: "DJI-M3P-GPS", platform: "淘宝", note: "含天线" },
      { name: "哈苏摄像头", spec: "2000万像素", price: 1299, model: "DJI-M3P-CAM", platform: "闲鱼", note: "含云台" },
      { name: "图传系统", spec: "O3图传", price: 599, model: "DJI-M3P-VTX", platform: "淘宝", note: "含图传天线" },
      { name: "遥控器", spec: "RC Pro遥控器", price: 699, model: "DJI-M3P-RC", platform: "京东", note: "含屏幕" },
      { name: "机架", spec: "碳纤维机架", price: 199, model: "DJI-M3P-FRAME", platform: "淘宝", note: "含中心板和机臂" },
      { name: "云台电机", spec: "三轴云台电机", price: 299, model: "DJI-M3P-GIMBAL", platform: "淘宝", note: "含编码器" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 15, model: "DJI-M3P-SCREW", platform: "拼多多", note: "含机架螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 59, model: "DJI-M3P-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "无人机零件非常精密，务必在防静电环境下操作" },
      { title: "组装机架", desc: "取出碳纤维机架，安装机身中心板和机臂，用螺丝固定", tip: "机架是无人机的骨架，务必检查完好" },
      { title: "安装电机", desc: "将无刷电机固定在机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电调", desc: "将电调连接线焊接到电机和飞控", tip: "焊接时注意焊点质量" },
      { title: "安装飞控", desc: "将飞行控制器固定在中心板上，连接电调排线", tip: "飞控有固定位置，需对准" },
      { title: "安装GPS模块", desc: "将GPS模块和罗盘安装到机身顶部，连接GPS天线", tip: "GPS天线要远离金属物体" },
      { title: "安装图传系统", desc: "将图传发射机安装到机身顶部，连接图传天线", tip: "图传天线要对准方向" },
      { title: "安装云台", desc: "将三轴云台安装到机身底部，连接云台电机排线到飞控", tip: "云台电机有正反方向，注意标识" },
      { title: "安装摄像头", desc: "将哈苏摄像头安装到云台上，连接摄像头排线到图传", tip: "摄像头镜头要对准前方" },
      { title: "安装电池仓", desc: "将电池仓安装到机身底部，连接电池插头到飞控", tip: "电池插头要锁紧" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "连接遥控器", desc: "打开遥控器电源，与无人机进行配对", tip: "配对时保持距离" },
      { title: "IMU校准", desc: "进行IMU校准和罗盘校准", tip: "校准时保持无人机水平" },
      { title: "试飞测试", desc: "在空旷场地进行试飞测试，测试飞行稳定性和相机功能", tip: "试飞前检查所有连接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "dji-mavic-3-pro-repair",
    name: "大疆 Mavic 3 Pro 电机维修",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "repair",
    difficulty: "较高",
    time: "2-4小时",
    budget: "¥200-500",
    budgetNum: 300,
    keywords: ["dji", "大疆", "mavic3pro", "无人机", "无人机维修", "电机更换"],
    parts: [
      { name: "无刷电机", spec: "2806电机", price: 199, model: "DJI-M3P-MOTOR", platform: "京东", note: "含电机座" },
      { name: "拆机工具", spec: "电机更换专用工具", price: 25, model: "DJI-M3P-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、镊子、防静电手环", tip: "建议使用专业拆机工具" },
      { title: "关闭无人机", desc: "关闭无人机电源，取出电池", tip: "务必先关机并取出电池" },
      { title: "拆卸螺旋桨", desc: "按下螺旋桨卡扣，取下螺旋桨", tip: "注意正反桨的位置" },
      { title: "拆卸电机座螺丝", desc: "用螺丝刀拧下电机座上的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "断开电机连接线", desc: "断开电机与电调的连接线", tip: "连接线可能焊接，需小心剪断" },
      { title: "取下旧电机", desc: "将旧电机从机臂上取下", tip: "操作要慢，避免损坏机臂" },
      { title: "安装新电机", desc: "将新电机安装到机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电机连接线", desc: "将电机连接线焊接到电调", tip: "焊接时注意焊点质量" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "安装电池", desc: "将电池插入电池仓", tip: "确保电池接触良好" },
      { title: "开机测试", desc: "打开无人机电源，测试电机转动是否正常", tip: "如果电机无法转动，可能需要重新焊接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙", tip: "建议在完成后进行一次试飞测试" }
    ]
  },
  {
    id: "dji-mini-4-pro-assembly",
    name: "大疆 Mini 4 Pro 组装教程",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "assembly",
    difficulty: "中等",
    time: "6-10小时",
    budget: "¥3000-7000",
    budgetNum: 4500,
    keywords: ["dji", "大疆", "mini4pro", "无人机", "无人机组装"],
    parts: [
      { name: "飞行控制器", spec: "Mini 4 Pro飞控", price: 899, model: "DJI-M4P-FC", platform: "京东", note: "含IMU和罗盘" },
      { name: "无刷电机", spec: "1504电机 4个", price: 149, model: "DJI-M4P-MOTOR", platform: "京东", note: "含电机座" },
      { name: "螺旋桨", spec: "5930桨叶", price: 39, model: "DJI-M4P-PROP", platform: "京东", note: "正反桨各4个" },
      { name: "锂电池", spec: "2590mAh 11.4V", price: 299, model: "DJI-M4P-BAT", platform: "京东", note: "原装品质" },
      { name: "摄像头", spec: "1/1.3英寸 CMOS", price: 799, model: "DJI-M4P-CAM", platform: "闲鱼", note: "含云台" },
      { name: "图传系统", spec: "O3+图传", price: 399, model: "DJI-M4P-VTX", platform: "淘宝", note: "含图传天线" },
      { name: "遥控器", spec: "RC 2遥控器", price: 499, model: "DJI-M4P-RC", platform: "京东", note: "含屏幕" },
      { name: "机架", spec: "塑料机架", price: 99, model: "DJI-M4P-FRAME", platform: "淘宝", note: "含中心板和机臂" },
      { name: "云台电机", spec: "三轴云台电机", price: 199, model: "DJI-M4P-GIMBAL", platform: "淘宝", note: "含编码器" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 10, model: "DJI-M4P-SCREW", platform: "拼多多", note: "含机架螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 39, model: "DJI-M4P-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "无人机零件非常精密，务必在防静电环境下操作" },
      { title: "组装机架", desc: "取出塑料机架，安装机身中心板和机臂，用螺丝固定", tip: "机架是无人机的骨架，务必检查完好" },
      { title: "安装电机", desc: "将无刷电机固定在机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电调", desc: "将电调连接线连接到电机和飞控", tip: "连接线要对准接口" },
      { title: "安装飞控", desc: "将飞行控制器固定在中心板上，连接电调排线", tip: "飞控有固定位置，需对准" },
      { title: "安装图传系统", desc: "将图传发射机安装到机身顶部，连接图传天线", tip: "图传天线要对准方向" },
      { title: "安装云台", desc: "将三轴云台安装到机身底部，连接云台电机排线到飞控", tip: "云台电机有正反方向，注意标识" },
      { title: "安装摄像头", desc: "将摄像头安装到云台上，连接摄像头排线到图传", tip: "摄像头镜头要对准前方" },
      { title: "安装电池仓", desc: "将电池仓安装到机身底部，连接电池插头到飞控", tip: "电池插头要锁紧" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "连接遥控器", desc: "打开遥控器电源，与无人机进行配对", tip: "配对时保持距离" },
      { title: "IMU校准", desc: "进行IMU校准和罗盘校准", tip: "校准时保持无人机水平" },
      { title: "试飞测试", desc: "在空旷场地进行试飞测试，测试飞行稳定性和相机功能", tip: "试飞前检查所有连接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "dji-mini-4-pro-repair",
    name: "大疆 Mini 4 Pro 电机维修",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "repair",
    difficulty: "中等",
    time: "1.5-3小时",
    budget: "¥150-400",
    budgetNum: 240,
    keywords: ["dji", "大疆", "mini4pro", "无人机", "无人机维修", "电机更换"],
    parts: [
      { name: "无刷电机", spec: "1504电机", price: 149, model: "DJI-M4P-MOTOR", platform: "京东", note: "含电机座" },
      { name: "拆机工具", spec: "电机更换专用工具", price: 20, model: "DJI-M4P-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、镊子、防静电手环", tip: "建议使用专业拆机工具" },
      { title: "关闭无人机", desc: "关闭无人机电源，取出电池", tip: "务必先关机并取出电池" },
      { title: "拆卸螺旋桨", desc: "按下螺旋桨卡扣，取下螺旋桨", tip: "注意正反桨的位置" },
      { title: "拆卸电机座螺丝", desc: "用螺丝刀拧下电机座上的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "断开电机连接线", desc: "断开电机与电调的连接线", tip: "连接线可能焊接，需小心剪断" },
      { title: "取下旧电机", desc: "将旧电机从机臂上取下", tip: "操作要慢，避免损坏机臂" },
      { title: "安装新电机", desc: "将新电机安装到机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电机连接线", desc: "将电机连接线焊接到电调", tip: "焊接时注意焊点质量" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "安装电池", desc: "将电池插入电池仓", tip: "确保电池接触良好" },
      { title: "开机测试", desc: "打开无人机电源，测试电机转动是否正常", tip: "如果电机无法转动，可能需要重新焊接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙", tip: "建议在完成后进行一次试飞测试" }
    ]
  },
  {
    id: "dji-air-3-assembly",
    name: "大疆 Air 3 组装教程",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "assembly",
    difficulty: "较高",
    time: "8-14小时",
    budget: "¥4000-9000",
    budgetNum: 6000,
    keywords: ["dji", "大疆", "air3", "无人机", "无人机组装"],
    parts: [
      { name: "飞行控制器", spec: "Air 3飞控", price: 1099, model: "DJI-AIR3-FC", platform: "京东", note: "含IMU和罗盘" },
      { name: "无刷电机", spec: "2312电机 4个", price: 179, model: "DJI-AIR3-MOTOR", platform: "京东", note: "含电机座" },
      { name: "锂电池", spec: "4240mAh 15.4V", price: 349, model: "DJI-AIR3-BAT", platform: "京东", note: "原装品质" },
      { name: "双摄系统", spec: "广角+长焦", price: 999, model: "DJI-AIR3-CAM", platform: "闲鱼", note: "含云台" },
      { name: "图传系统", spec: "O3+图传", price: 499, model: "DJI-AIR3-VTX", platform: "淘宝", note: "含图传天线" },
      { name: "遥控器", spec: "RC Pro遥控器", price: 599, model: "DJI-AIR3-RC", platform: "京东", note: "含屏幕" },
      { name: "机架", spec: "碳纤维机架", price: 149, model: "DJI-AIR3-FRAME", platform: "淘宝", note: "含中心板和机臂" },
      { name: "电调", spec: "4合1电调", price: 89, model: "DJI-AIR3-ESC", platform: "淘宝", note: "含连接线" },
      { name: "云台电机", spec: "三轴云台电机", price: 249, model: "DJI-AIR3-GIMBAL", platform: "淘宝", note: "含编码器" },
      { name: "螺旋桨", spec: "7238桨叶", price: 44, model: "DJI-AIR3-PROP", platform: "京东", note: "正反桨各4个" },
      { name: "螺丝套装", spec: "全套拆机螺丝", price: 12, model: "DJI-AIR3-SCREW", platform: "拼多多", note: "含机架螺丝" },
      { name: "拆机工具", spec: "专业拆机套装", price: 49, model: "DJI-AIR3-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "无人机零件非常精密，务必在防静电环境下操作" },
      { title: "组装机架", desc: "取出碳纤维机架，安装机身中心板和机臂，用螺丝固定", tip: "机架是无人机的骨架，务必检查完好" },
      { title: "安装电机", desc: "将无刷电机固定在机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电调", desc: "将电调连接线焊接到电机和飞控", tip: "焊接时注意焊点质量" },
      { title: "安装飞控", desc: "将飞行控制器固定在中心板上，连接电调排线", tip: "飞控有固定位置，需对准" },
      { title: "安装图传系统", desc: "将图传发射机安装到机身顶部，连接图传天线", tip: "图传天线要对准方向" },
      { title: "安装云台", desc: "将三轴云台安装到机身底部，连接云台电机排线到飞控", tip: "云台电机有正反方向，注意标识" },
      { title: "安装双摄系统", desc: "将广角和长焦摄像头安装到云台上，连接摄像头排线到图传", tip: "摄像头镜头要对准前方" },
      { title: "安装电池仓", desc: "将电池仓安装到机身底部，连接电池插头到飞控", tip: "电池插头要锁紧" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "连接遥控器", desc: "打开遥控器电源，与无人机进行配对", tip: "配对时保持距离" },
      { title: "IMU校准", desc: "进行IMU校准和罗盘校准", tip: "校准时保持无人机水平" },
      { title: "试飞测试", desc: "在空旷场地进行试飞测试，测试飞行稳定性和双摄功能", tip: "试飞前检查所有连接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "dji-air-3-repair",
    name: "大疆 Air 3 电机维修",
    icon: "🚁",
    category: "无人机",
    categoryId: 2,
    type: "repair",
    difficulty: "较高",
    time: "2-4小时",
    budget: "¥200-500",
    budgetNum: 320,
    keywords: ["dji", "大疆", "air3", "无人机", "无人机维修", "电机更换"],
    parts: [
      { name: "无刷电机", spec: "2312电机", price: 179, model: "DJI-AIR3-MOTOR", platform: "京东", note: "含电机座" },
      { name: "拆机工具", spec: "电机更换专用工具", price: 25, model: "DJI-AIR3-T", platform: "京东", note: "含螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、镊子、防静电手环", tip: "建议使用专业拆机工具" },
      { title: "关闭无人机", desc: "关闭无人机电源，取出电池", tip: "务必先关机并取出电池" },
      { title: "拆卸螺旋桨", desc: "按下螺旋桨卡扣，取下螺旋桨", tip: "注意正反桨的位置" },
      { title: "拆卸电机座螺丝", desc: "用螺丝刀拧下电机座上的螺丝", tip: "螺丝长度相同，可以放在一起" },
      { title: "断开电机连接线", desc: "断开电机与电调的连接线", tip: "连接线可能焊接，需小心剪断" },
      { title: "取下旧电机", desc: "将旧电机从机臂上取下", tip: "操作要慢，避免损坏机臂" },
      { title: "安装新电机", desc: "将新电机安装到机臂上，用螺丝固定电机座", tip: "电机有正反方向，注意标识" },
      { title: "连接电机连接线", desc: "将电机连接线焊接到电调", tip: "焊接时注意焊点质量" },
      { title: "安装螺旋桨", desc: "将螺旋桨安装到电机上，注意正反桨", tip: "螺旋桨有卡扣，需扣紧" },
      { title: "安装电池", desc: "将电池插入电池仓", tip: "确保电池接触良好" },
      { title: "开机测试", desc: "打开无人机电源，测试电机转动是否正常", tip: "如果电机无法转动，可能需要重新焊接" },
      { title: "最终检查", desc: "检查无人机外观是否有缝隙", tip: "建议在完成后进行一次试飞测试" }
    ]
  },
  // ====== 游戏设备系列 ======
  {
    id: "playstation-5-pro-assembly",
    name: "PlayStation 5 Pro 组装教程",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "assembly",
    difficulty: "中等",
    time: "4-6小时",
    budget: "¥3000-6000",
    budgetNum: 4200,
    keywords: ["playstation", "ps5", "索尼", "游戏机", "游戏机组装"],
    parts: [
      { name: "主板", spec: "AMD定制", price: 1999, model: "PS5P-MB", platform: "淘宝", note: "含CPU、GPU、内存" },
      { name: "SSD", spec: "2TB NVMe", price: 599, model: "PS5P-SSD", platform: "京东", note: "PCIe 4.0" },
      { name: "电源", spec: "450W", price: 299, model: "PS5P-PSU", platform: "淘宝", note: "原装品质" },
      { name: "散热器", spec: "铜制散热片", price: 199, model: "PS5P-HEAT", platform: "淘宝", note: "含导热膏" },
      { name: "光驱", spec: "4K蓝光光驱", price: 399, model: "PS5P-ODD", platform: "淘宝", note: "含连接线" },
      { name: "外壳", spec: "白色外壳", price: 149, model: "PS5P-SHELL", platform: "淘宝", note: "含上下盖" },
      { name: "风扇", spec: "120mm风扇", price: 99, model: "PS5P-FAN", platform: "京东", note: "含连接线" },
      { name: "硬盘支架", price: 29, model: "PS5P-HDD", platform: "拼多多", note: "含螺丝" },
      { name: "螺丝套装", price: 15, model: "PS5P-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", price: 35, model: "PS5P-T", platform: "京东", note: "含螺丝刀、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，准备好所有零件和工具", tip: "务必在防静电环境下操作" },
      { title: "安装主板", desc: "将主板放置在外壳底座上，用螺丝固定", tip: "主板有固定位置，需对准" },
      { title: "安装散热器", desc: "将散热器安装到主板上，涂抹导热膏", tip: "导热膏要均匀涂抹" },
      { title: "安装风扇", desc: "将风扇安装到散热器上，连接风扇排线", tip: "风扇方向要正确" },
      { title: "安装电源", desc: "将电源安装到外壳底座上，连接电源线到主板", tip: "电源线有卡扣，需扣紧" },
      { title: "安装SSD", desc: "将SSD安装到硬盘支架上，插入主板M.2插槽", tip: "SSD要对准插槽" },
      { title: "安装光驱", desc: "将光驱安装到外壳底座上，连接数据线和电源线", tip: "光驱要对准位置" },
      { title: "安装外壳上盖", desc: "将白色外壳上盖安装到主机上", tip: "外壳有卡扣，需对准" },
      { title: "开机测试", desc: "连接电源和HDMI线，开机测试", tip: "如果无法开机，检查所有连接" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "playstation-5-pro-repair",
    name: "PlayStation 5 Pro 风扇维修",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥100-300",
    budgetNum: 180,
    keywords: ["playstation", "ps5", "索尼", "游戏机", "游戏机维修", "风扇更换"],
    parts: [
      { name: "风扇", spec: "120mm风扇", price: 99, model: "PS5P-FAN", platform: "京东", note: "含连接线" },
      { name: "拆机工具", price: 20, model: "PS5P-T", platform: "京东", note: "含螺丝刀、撬片" },
      { name: "导热膏", price: 15, model: "PS5P-TX", platform: "京东", note: "含导热垫" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、撬片", tip: "建议使用专业拆机工具" },
      { title: "关闭主机", desc: "关闭主机电源，拔下电源线", tip: "务必先关机断电" },
      { title: "拆卸外壳上盖", desc: "用撬片撬开白色外壳上盖", tip: "外壳有卡扣，需小心" },
      { title: "拆卸风扇螺丝", desc: "用螺丝刀拧下风扇上的螺丝", tip: "螺丝长度可能不同，注意区分" },
      { title: "断开风扇排线", desc: "断开风扇与主板的连接线", tip: "排线有卡扣，需小心" },
      { title: "取下旧风扇", desc: "将旧风扇从散热器上取下", tip: "操作要慢，避免损坏散热器" },
      { title: "安装新风扇", desc: "将新风扇安装到散热器上，用螺丝固定", tip: "风扇方向要正确" },
      { title: "连接风扇排线", desc: "将风扇排线连接到主板", tip: "排线要插紧" },
      { title: "安装外壳上盖", desc: "将白色外壳上盖安装到主机上", tip: "外壳有卡扣，需对准" },
      { title: "开机测试", desc: "连接电源和HDMI线，开机测试风扇是否正常转动", tip: "如果风扇不转，检查连接线" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙", tip: "建议在完成后测试散热效果" }
    ]
  },
  {
    id: "xbox-series-x-assembly",
    name: "Xbox Series X 组装教程",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "assembly",
    difficulty: "中等",
    time: "4-6小时",
    budget: "¥2800-5500",
    budgetNum: 3800,
    keywords: ["xbox", "微软", "游戏机", "游戏机组装"],
    parts: [
      { name: "主板", spec: "AMD定制", price: 1899, model: "XSX-MB", platform: "淘宝", note: "含CPU、GPU、内存" },
      { name: "SSD", spec: "1TB NVMe", price: 499, model: "XSX-SSD", platform: "京东", note: "PCIe 4.0" },
      { name: "电源", spec: "500W", price: 299, model: "XSX-PSU", platform: "淘宝", note: "原装品质" },
      { name: "散热器", spec: "一体式水冷", price: 199, model: "XSX-HEAT", platform: "淘宝", note: "含导热膏" },
      { name: "光驱", spec: "4K蓝光光驱", price: 349, model: "XSX-ODD", platform: "淘宝", note: "含连接线" },
      { name: "外壳", spec: "黑色外壳", price: 149, model: "XSX-SHELL", platform: "淘宝", note: "含上下盖" },
      { name: "风扇", spec: "120mm风扇", price: 89, model: "XSX-FAN", platform: "京东", note: "含连接线" },
      { name: "硬盘支架", price: 25, model: "XSX-HDD", platform: "拼多多", note: "含螺丝" },
      { name: "螺丝套装", price: 12, model: "XSX-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", price: 35, model: "XSX-T", platform: "京东", note: "含螺丝刀、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，准备好所有零件和工具", tip: "务必在防静电环境下操作" },
      { title: "安装主板", desc: "将主板放置在外壳底座上，用螺丝固定", tip: "主板有固定位置，需对准" },
      { title: "安装散热器", desc: "将一体式水冷散热器安装到主板上，涂抹导热膏", tip: "导热膏要均匀涂抹" },
      { title: "安装风扇", desc: "将风扇安装到散热器上，连接风扇排线", tip: "风扇方向要正确" },
      { title: "安装电源", desc: "将电源安装到外壳底座上，连接电源线到主板", tip: "电源线有卡扣，需扣紧" },
      { title: "安装SSD", desc: "将SSD安装到硬盘支架上，插入主板M.2插槽", tip: "SSD要对准插槽" },
      { title: "安装光驱", desc: "将光驱安装到外壳底座上，连接数据线和电源线", tip: "光驱要对准位置" },
      { title: "安装外壳上盖", desc: "将黑色外壳上盖安装到主机上", tip: "外壳有卡扣，需对准" },
      { title: "开机测试", desc: "连接电源和HDMI线，开机测试", tip: "如果无法开机，检查所有连接" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "xbox-series-x-repair",
    name: "Xbox Series X 风扇维修",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥100-300",
    budgetNum: 170,
    keywords: ["xbox", "微软", "游戏机", "游戏机维修", "风扇更换"],
    parts: [
      { name: "风扇", spec: "120mm风扇", price: 89, model: "XSX-FAN", platform: "京东", note: "含连接线" },
      { name: "拆机工具", price: 20, model: "XSX-T", platform: "京东", note: "含螺丝刀、撬片" },
      { name: "导热膏", price: 12, model: "XSX-TX", platform: "京东", note: "含导热垫" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、撬片", tip: "建议使用专业拆机工具" },
      { title: "关闭主机", desc: "关闭主机电源，拔下电源线", tip: "务必先关机断电" },
      { title: "拆卸外壳上盖", desc: "用撬片撬开黑色外壳上盖", tip: "外壳有卡扣，需小心" },
      { title: "拆卸风扇螺丝", desc: "用螺丝刀拧下风扇上的螺丝", tip: "螺丝长度可能不同，注意区分" },
      { title: "断开风扇排线", desc: "断开风扇与主板的连接线", tip: "排线有卡扣，需小心" },
      { title: "取下旧风扇", desc: "将旧风扇从散热器上取下", tip: "操作要慢，避免损坏散热器" },
      { title: "安装新风扇", desc: "将新风扇安装到散热器上，用螺丝固定", tip: "风扇方向要正确" },
      { title: "连接风扇排线", desc: "将风扇排线连接到主板", tip: "排线要插紧" },
      { title: "安装外壳上盖", desc: "将黑色外壳上盖安装到主机上", tip: "外壳有卡扣，需对准" },
      { title: "开机测试", desc: "连接电源和HDMI线，开机测试风扇是否正常转动", tip: "如果风扇不转，检查连接线" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙", tip: "建议在完成后测试散热效果" }
    ]
  },
  {
    id: "nintendo-switch-2-assembly",
    name: "Nintendo Switch 2 组装教程",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "assembly",
    difficulty: "中等",
    time: "3-5小时",
    budget: "¥1500-3500",
    budgetNum: 2200,
    keywords: ["nintendo", "switch", "任天堂", "游戏机", "游戏机组装"],
    parts: [
      { name: "LCD屏幕", spec: "8英寸", price: 599, model: "NS2-LCD", platform: "淘宝", note: "含触控层" },
      { name: "电池", spec: "4310mAh", price: 149, model: "NS2-BAT", platform: "京东", note: "原装品质" },
      { name: "主板", price: 999, model: "NS2-MB", platform: "淘宝", note: "含CPU、内存" },
      { name: "Joy-Con手柄", spec: "左右一对", price: 399, model: "NS2-JC", platform: "京东", note: "含摇杆、按键" },
      { name: "外壳", price: 99, model: "NS2-SHELL", platform: "淘宝", note: "含上下盖" },
      { name: "散热风扇", spec: "40mm风扇", price: 79, model: "NS2-FAN", platform: "京东", note: "含连接线" },
      { name: "扬声器", price: 39, model: "NS2-SPK", platform: "淘宝", note: "含左右扬声器" },
      { name: "震动马达", spec: "HD震动", price: 29, model: "NS2-VIB", platform: "淘宝", note: "含左右震动" },
      { name: "螺丝套装", price: 10, model: "NS2-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", price: 29, model: "NS2-T", platform: "京东", note: "含螺丝刀、撬片" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，准备好所有零件和工具", tip: "务必在防静电环境下操作" },
      { title: "安装主板", desc: "将主板放置在外壳下盖上，用螺丝固定", tip: "主板有固定位置，需对准" },
      { title: "安装散热风扇", desc: "将散热风扇安装到主板上，连接风扇排线", tip: "风扇方向要正确" },
      { title: "安装扬声器", desc: "将扬声器安装到外壳下盖上，连接扬声器排线", tip: "扬声器有左右之分" },
      { title: "安装震动马达", desc: "将震动马达安装到外壳下盖上，连接震动排线", tip: "震动马达有左右之分" },
      { title: "安装电池", desc: "将电池安装到外壳下盖上，连接电池排线", tip: "电池要固定好" },
      { title: "安装屏幕", desc: "将LCD屏幕安装到外壳上盖上，连接屏幕排线", tip: "屏幕排线有卡扣，需小心" },
      { title: "安装Joy-Con手柄", desc: "将Joy-Con手柄安装到主机左右两侧", tip: "手柄有左右之分" },
      { title: "安装外壳下盖", desc: "将外壳下盖安装到主机上，用螺丝固定", tip: "外壳有卡扣，需对准" },
      { title: "开机测试", desc: "连接电源，开机测试", tip: "如果无法开机，检查所有连接" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "nintendo-switch-2-repair",
    name: "Nintendo Switch 2 屏幕维修",
    icon: "🎮",
    category: "游戏设备",
    categoryId: 4,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥600-1000",
    budgetNum: 780,
    keywords: ["nintendo", "switch", "任天堂", "游戏机", "游戏机维修", "屏幕更换"],
    parts: [
      { name: "LCD屏幕", spec: "8英寸", price: 599, model: "NS2-LCD", platform: "淘宝", note: "含触控层" },
      { name: "拆机工具", price: 20, model: "NS2-T", platform: "京东", note: "含螺丝刀、撬片" },
      { name: "双面胶", price: 10, model: "NS2-TAPE", platform: "拼多多", note: "屏幕固定用" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、撬片", tip: "建议使用专业拆机工具" },
      { title: "关闭主机", desc: "关闭主机电源", tip: "务必先关机" },
      { title: "拆卸Joy-Con手柄", desc: "按下手柄释放按钮，取下左右Joy-Con手柄", tip: "手柄有左右之分" },
      { title: "拆卸外壳下盖", desc: "用螺丝刀拧下外壳下盖上的螺丝，取下外壳", tip: "螺丝长度可能不同，注意区分" },
      { title: "断开电池排线", desc: "断开电池与主板的连接线", tip: "排线有卡扣，需小心" },
      { title: "断开屏幕排线", desc: "断开屏幕与主板的连接线", tip: "屏幕排线非常脆弱，需小心操作" },
      { title: "取下旧屏幕", desc: "将旧屏幕从外壳上盖上取下", tip: "屏幕背面有双面胶，需小心剥离" },
      { title: "安装新屏幕", desc: "将新屏幕安装到外壳上盖上，粘贴双面胶", tip: "屏幕要对准位置" },
      { title: "连接屏幕排线", desc: "将屏幕排线连接到主板", tip: "排线要插紧" },
      { title: "连接电池排线", desc: "将电池排线连接到主板", tip: "排线要插紧" },
      { title: "安装外壳下盖", desc: "将外壳下盖安装到主机上，用螺丝固定", tip: "外壳有卡扣，需对准" },
      { title: "安装Joy-Con手柄", desc: "将Joy-Con手柄安装到主机左右两侧", tip: "手柄有左右之分" },
      { title: "开机测试", desc: "连接电源，开机测试屏幕是否正常显示", tip: "如果屏幕不显示，检查排线连接" },
      { title: "最终检查", desc: "检查主机外观是否有缝隙", tip: "建议在完成后测试触控功能" }
    ]
  },
  // ====== VR/AR 设备 ======
  {
    id: "apple-vision-pro-2-assembly",
    name: "Apple Vision Pro 2 组装教程",
    icon: "🥽",
    category: "VR/AR设备",
    categoryId: 6,
    type: "assembly",
    difficulty: "极高",
    time: "10-20小时",
    budget: "¥15000-35000",
    budgetNum: 22000,
    keywords: ["apple", "visionpro", "苹果", "vr", "ar", "vr组装"],
    parts: [
      { name: "micro-OLED显示面板", spec: "2个", price: 2999, model: "AVP2-OLED", platform: "淘宝", note: "含驱动板" },
      { name: "透镜组", spec: "Pancake透镜", price: 599, model: "AVP2-LENS", platform: "淘宝", note: "含透镜调整机构" },
      { name: "主板", spec: "M5芯片", price: 3499, model: "AVP2-MB", platform: "淘宝", note: "含CPU、GPU、内存" },
      { name: "摄像头模组", spec: "12个摄像头", price: 999, model: "AVP2-CAM", platform: "淘宝", note: "含深度摄像头" },
      { name: "传感器", spec: "IMU传感器", price: 499, model: "AVP2-SENSOR", platform: "淘宝", note: "含陀螺仪、加速度计" },
      { name: "电池", spec: "2320mAh", price: 399, model: "AVP2-BAT", platform: "京东", note: "原装品质" },
      { name: "外壳", spec: "铝制外壳", price: 599, model: "AVP2-SHELL", platform: "淘宝", note: "含面罩" },
      { name: "头带", spec: "弹性头带", price: 299, model: "AVP2-STRAP", platform: "京东", note: "含头垫" },
      { name: "扬声器", price: 199, model: "AVP2-SPK", platform: "淘宝", note: "含左右扬声器" },
      { name: "麦克风", spec: "6麦克风", price: 99, model: "AVP2-MIC", platform: "淘宝", note: "含降噪麦克风" },
      { name: "螺丝套装", price: 25, model: "AVP2-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", price: 79, model: "AVP2-T", platform: "京东", note: "含精密螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净无尘的工作间内铺防静电垫，佩戴防静电手环和手套，准备好所有零件和工具", tip: "VR设备非常精密，务必在无尘环境下操作" },
      { title: "安装显示面板", desc: "将micro-OLED显示面板安装到外壳内部，连接显示排线", tip: "显示面板非常脆弱，需小心操作" },
      { title: "安装透镜组", desc: "将Pancake透镜组安装到显示面板前方，调整透镜位置", tip: "透镜位置直接影响显示效果" },
      { title: "安装主板", desc: "将主板安装到外壳内部，用螺丝固定", tip: "主板有固定位置，需对准" },
      { title: "连接摄像头模组", desc: "将摄像头模组安装到外壳上，连接摄像头排线到主板", tip: "摄像头有多个，需按位置安装" },
      { title: "安装传感器", desc: "将IMU传感器安装到主板上，连接传感器排线", tip: "传感器要对准位置" },
      { title: "安装扬声器", desc: "将扬声器安装到外壳两侧，连接扬声器排线", tip: "扬声器有左右之分" },
      { title: "安装麦克风", desc: "将麦克风安装到外壳上，连接麦克风排线", tip: "麦克风有多个，需按位置安装" },
      { title: "安装电池", desc: "将电池安装到外壳内部，连接电池排线", tip: "电池要固定好" },
      { title: "安装头带", desc: "将头带安装到外壳上，调整头带松紧", tip: "头带要舒适" },
      { title: "安装面罩", desc: "将面罩安装到外壳上", tip: "面罩要对准位置" },
      { title: "开机测试", desc: "连接电源，开机测试显示和追踪功能", tip: "如果无法开机，检查所有连接" },
      { title: "最终检查", desc: "检查设备外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "apple-vision-pro-2-repair",
    name: "Apple Vision Pro 2 电池维修",
    icon: "🥽",
    category: "VR/AR设备",
    categoryId: 6,
    type: "repair",
    difficulty: "极高",
    time: "3-5小时",
    budget: "¥400-800",
    budgetNum: 580,
    keywords: ["apple", "visionpro", "苹果", "vr", "ar", "vr维修", "电池更换"],
    parts: [
      { name: "电池", spec: "2320mAh", price: 399, model: "AVP2-BAT", platform: "京东", note: "原装品质" },
      { name: "拆机工具", price: 59, model: "AVP2-T", platform: "京东", note: "含精密螺丝刀、镊子、撬片" },
      { name: "双面胶", price: 15, model: "AVP2-TAPE", platform: "拼多多", note: "电池固定用" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备精密螺丝刀、镊子、撬片", tip: "建议使用专业拆机工具" },
      { title: "关闭设备", desc: "关闭设备电源", tip: "务必先关机" },
      { title: "拆卸头带", desc: "取下头带", tip: "头带有卡扣，需小心" },
      { title: "拆卸面罩", desc: "取下面罩", tip: "面罩有卡扣，需小心" },
      { title: "拆卸外壳螺丝", desc: "用螺丝刀拧下外壳上的螺丝", tip: "螺丝非常小，注意保存" },
      { title: "打开外壳", desc: "用撬片小心打开外壳", tip: "外壳有卡扣，需小心" },
      { title: "断开电池排线", desc: "断开电池与主板的连接线", tip: "电池排线有卡扣，需小心" },
      { title: "取下旧电池", desc: "将旧电池从外壳内部取下", tip: "电池背面有双面胶，需小心剥离" },
      { title: "安装新电池", desc: "将新电池安装到外壳内部，粘贴双面胶", tip: "电池要对准位置" },
      { title: "连接电池排线", desc: "将电池排线连接到主板", tip: "排线要插紧" },
      { title: "关闭外壳", desc: "将外壳合上，用螺丝固定", tip: "外壳有卡扣，需对准" },
      { title: "安装面罩", desc: "将面罩安装到外壳上", tip: "面罩要对准位置" },
      { title: "安装头带", desc: "将头带安装到外壳上", tip: "头带有卡扣，需扣紧" },
      { title: "开机测试", desc: "连接电源，开机测试电池是否正常充电", tip: "如果无法充电，检查排线连接" },
      { title: "最终检查", desc: "检查设备外观是否有缝隙", tip: "建议在完成后测试续航时间" }
    ]
  },
  {
    id: "meta-quest-3-assembly",
    name: "Meta Quest 3 组装教程",
    icon: "🥽",
    category: "VR/AR设备",
    categoryId: 6,
    type: "assembly",
    difficulty: "较高",
    time: "6-12小时",
    budget: "¥4000-8000",
    budgetNum: 5500,
    keywords: ["meta", "quest3", "vr", "vr组装"],
    parts: [
      { name: "LCD显示面板", spec: "2个", price: 1299, model: "MQ3-LCD", platform: "淘宝", note: "含驱动板" },
      { name: "透镜组", spec: "Pancake透镜", price: 299, model: "MQ3-LENS", platform: "淘宝", note: "含透镜调整机构" },
      { name: "主板", spec: "骁龙XR2 Gen 2", price: 1499, model: "MQ3-MB", platform: "淘宝", note: "含CPU、GPU、内存" },
      { name: "电池", spec: "5000mAh", price: 299, model: "MQ3-BAT", platform: "京东", note: "原装品质" },
      { name: "摄像头", spec: "6个摄像头", price: 399, model: "MQ3-CAM", platform: "淘宝", note: "含深度摄像头" },
      { name: "外壳", price: 199, model: "MQ3-SHELL", platform: "淘宝", note: "含面罩" },
      { name: "头带", price: 149, model: "MQ3-STRAP", platform: "京东", note: "含头垫" },
      { name: "扬声器", price: 99, model: "MQ3-SPK", platform: "淘宝", note: "含左右扬声器" },
      { name: "麦克风", spec: "4麦克风", price: 59, model: "MQ3-MIC", platform: "淘宝", note: "含降噪麦克风" },
      { name: "螺丝套装", price: 15, model: "MQ3-SCREW", platform: "拼多多", note: "含外壳螺丝" },
      { name: "拆机工具", price: 49, model: "MQ3-T", platform: "京东", note: "含精密螺丝刀、镊子" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上铺防静电垫，佩戴防静电手环，准备好所有零件和工具", tip: "VR设备非常精密，务必在防静电环境下操作" },
      { title: "安装显示面板", desc: "将LCD显示面板安装到外壳内部，连接显示排线", tip: "显示面板非常脆弱，需小心操作" },
      { title: "安装透镜组", desc: "将Pancake透镜组安装到显示面板前方，调整透镜位置", tip: "透镜位置直接影响显示效果" },
      { title: "安装主板", desc: "将主板安装到外壳内部，用螺丝固定", tip: "主板有固定位置，需对准" },
      { title: "连接摄像头", desc: "将摄像头安装到外壳上，连接摄像头排线到主板", tip: "摄像头有多个，需按位置安装" },
      { title: "安装扬声器", desc: "将扬声器安装到外壳两侧，连接扬声器排线", tip: "扬声器有左右之分" },
      { title: "安装麦克风", desc: "将麦克风安装到外壳上，连接麦克风排线", tip: "麦克风有多个，需按位置安装" },
      { title: "安装电池", desc: "将电池安装到外壳内部，连接电池排线", tip: "电池要固定好" },
      { title: "安装头带", desc: "将头带安装到外壳上，调整头带松紧", tip: "头带要舒适" },
      { title: "安装面罩", desc: "将面罩安装到外壳上", tip: "面罩要对准位置" },
      { title: "开机测试", desc: "连接电源，开机测试显示和追踪功能", tip: "如果无法开机，检查所有连接" },
      { title: "最终检查", desc: "检查设备外观是否有缝隙，测试各项功能", tip: "确保所有功能正常后完成组装" }
    ]
  },
  {
    id: "meta-quest-3-repair",
    name: "Meta Quest 3 电池维修",
    icon: "🥽",
    category: "VR/AR设备",
    categoryId: 6,
    type: "repair",
    difficulty: "较高",
    time: "2-4小时",
    budget: "¥300-600",
    budgetNum: 420,
    keywords: ["meta", "quest3", "vr", "vr维修", "电池更换"],
    parts: [
      { name: "电池", spec: "5000mAh", price: 299, model: "MQ3-BAT", platform: "京东", note: "原装品质" },
      { name: "拆机工具", price: 35, model: "MQ3-T", platform: "京东", note: "含精密螺丝刀、镊子、撬片" },
      { name: "双面胶", price: 10, model: "MQ3-TAPE", platform: "拼多多", note: "电池固定用" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备精密螺丝刀、镊子、撬片", tip: "建议使用专业拆机工具" },
      { title: "关闭设备", desc: "关闭设备电源", tip: "务必先关机" },
      { title: "拆卸头带", desc: "取下头带", tip: "头带有卡扣，需小心" },
      { title: "拆卸面罩", desc: "取下面罩", tip: "面罩有卡扣，需小心" },
      { title: "拆卸外壳螺丝", desc: "用螺丝刀拧下外壳上的螺丝", tip: "螺丝非常小，注意保存" },
      { title: "打开外壳", desc: "用撬片小心打开外壳", tip: "外壳有卡扣，需小心" },
      { title: "断开电池排线", desc: "断开电池与主板的连接线", tip: "电池排线有卡扣，需小心" },
      { title: "取下旧电池", desc: "将旧电池从外壳内部取下", tip: "电池背面有双面胶，需小心剥离" },
      { title: "安装新电池", desc: "将新电池安装到外壳内部，粘贴双面胶", tip: "电池要对准位置" },
      { title: "连接电池排线", desc: "将电池排线连接到主板", tip: "排线要插紧" },
      { title: "关闭外壳", desc: "将外壳合上，用螺丝固定", tip: "外壳有卡扣，需对准" },
      { title: "安装面罩", desc: "将面罩安装到外壳上", tip: "面罩要对准位置" },
      { title: "安装头带", desc: "将头带安装到外壳上", tip: "头带有卡扣，需扣紧" },
      { title: "开机测试", desc: "连接电源，开机测试电池是否正常充电", tip: "如果无法充电，检查排线连接" },
      { title: "最终检查", desc: "检查设备外观是否有缝隙", tip: "建议在完成后测试续航时间" }
    ]
  },
  // ====== 智能家居 ======
  {
    id: "aqara-smart-home-kit-assembly",
    name: "Aqara 智能家居套装组装教程",
    icon: "🏠",
    category: "智能家居",
    categoryId: 17,
    type: "assembly",
    difficulty: "简单",
    time: "2-4小时",
    budget: "¥800-2000",
    budgetNum: 1200,
    keywords: ["aqara", "智能家居", "套装", "智能家居组装"],
    parts: [
      { name: "智能网关", price: 199, model: "AQARA-GW", platform: "京东", note: "Zigbee 3.0网关" },
      { name: "智能开关", price: 59, model: "AQARA-SW", platform: "京东", note: "单开智能开关" },
      { name: "智能插座", price: 49, model: "AQARA-SOCK", platform: "京东", note: "10A智能插座" },
      { name: "温湿度传感器", price: 39, model: "AQARA-TH", platform: "京东", note: "含气压传感器" },
      { name: "门窗传感器", price: 29, model: "AQARA-DW", platform: "京东", note: "磁吸式传感器" },
      { name: "人体红外传感器", price: 39, model: "AQARA-PIR", platform: "京东", note: "170度广角" },
      { name: "智能灯泡", price: 49, model: "AQARA-BULB", platform: "京东", note: "RGB灯泡" },
      { name: "连接线", price: 19, model: "AQARA-CABLE", platform: "拼多多", note: "电源线和网线" },
      { name: "智能门锁", price: 699, model: "AQARA-LOCK", platform: "京东", note: "指纹门锁" },
      { name: "智能窗帘电机", price: 599, model: "AQARA-CURTAIN", platform: "京东", note: "静音电机" }
    ],
    steps: [
      { title: "准备工作环境", desc: "准备好所有智能家居设备和工具", tip: "建议在装修前规划好智能家居布局" },
      { title: "安装智能网关", desc: "将智能网关放置在客厅中央，连接电源和网线", tip: "网关位置会影响设备信号" },
      { title: "安装智能开关", desc: "替换传统墙壁开关，接线调试", tip: "接线前务必断电" },
      { title: "安装智能插座", desc: "将智能插座插入墙壁插座，测试供电", tip: "智能插座不要过载" },
      { title: "安装温湿度传感器", desc: "将传感器粘贴在客厅或卧室墙壁上", tip: "传感器要远离热源" },
      { title: "安装门窗传感器", desc: "将传感器安装在门窗上，磁吸对齐", tip: "传感器要安装在活动扇上" },
      { title: "安装人体红外传感器", desc: "将传感器安装在门口或走廊天花板", tip: "传感器要对准检测区域" },
      { title: "安装智能灯泡", desc: "替换传统灯泡，配对连接", tip: "智能灯泡需要2.4GHz Wi-Fi" },
      { title: "安装智能门锁", desc: "替换传统门锁，安装指纹模块", tip: "门锁安装需要专业工具" },
      { title: "安装智能窗帘", desc: "安装窗帘轨道和电机", tip: "窗帘电机需要预留电源" },
      { title: "配对设备", desc: "打开米家APP，添加所有智能家居设备", tip: "配对时设备要靠近网关" },
      { title: "设置场景", desc: "配置自动化场景和联动规则", tip: "场景可以提高生活便利性" },
      { title: "最终检查", desc: "测试所有设备功能", tip: "确保所有设备正常工作" }
    ]
  },
  {
    id: "aqara-smart-home-kit-repair",
    name: "Aqara 智能开关维修",
    icon: "🏠",
    category: "智能家居",
    categoryId: 17,
    type: "repair",
    difficulty: "简单",
    time: "0.5-1小时",
    budget: "¥60-120",
    budgetNum: 85,
    keywords: ["aqara", "智能家居", "智能开关", "智能家居维修", "开关更换"],
    parts: [
      { name: "智能开关", price: 59, model: "AQARA-SW", platform: "京东", note: "单开智能开关" },
      { name: "拆机工具", price: 15, model: "AQARA-T", platform: "拼多多", note: "含螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀", tip: "建议使用专业拆机工具" },
      { title: "关闭电源", desc: "关闭总电源开关", tip: "务必先断电" },
      { title: "拆卸开关面板", desc: "用螺丝刀拧下面板上的螺丝，取下面板", tip: "面板有卡扣，需小心" },
      { title: "拆卸旧开关", desc: "用螺丝刀拧下开关上的螺丝，取下旧开关", tip: "注意记录电线连接方式" },
      { title: "断开电线", desc: "断开开关与电线的连接", tip: "建议拍照记录电线颜色" },
      { title: "安装新开关", desc: "将新开关安装到墙壁上，连接电线", tip: "电线要按颜色对应连接" },
      { title: "固定开关", desc: "用螺丝固定开关", tip: "开关要固定牢固" },
      { title: "安装面板", desc: "将面板安装到开关上，用螺丝固定", tip: "面板要对准位置" },
      { title: "打开电源", desc: "打开总电源开关", tip: "通电前检查接线是否正确" },
      { title: "测试开关", desc: "测试智能开关是否正常工作", tip: "如果开关不工作，检查接线" },
      { title: "最终检查", desc: "检查开关外观是否完好", tip: "建议在完成后测试APP控制" }
    ]
  },
  // ====== 监控安防 ======
  {
    id: "hikvision-camera-kit-assembly",
    name: "海康威视监控套装组装教程",
    icon: "📹",
    category: "监控安防",
    categoryId: 7,
    type: "assembly",
    difficulty: "中等",
    time: "3-6小时",
    budget: "¥1200-3500",
    budgetNum: 2000,
    keywords: ["hikvision", "海康威视", "监控", "安防", "监控组装"],
    parts: [
      { name: "摄像头", spec: "400万像素", price: 299, model: "HK-CAM", platform: "京东", note: "POE供电" },
      { name: "硬盘录像机", price: 499, model: "HK-NVR", platform: "京东", note: "4路POE录像机" },
      { name: "硬盘", spec: "2TB", price: 399, model: "HK-HDD", platform: "京东", note: "监控专用硬盘" },
      { name: "电源适配器", price: 49, model: "HK-PWR", platform: "京东", note: "12V电源" },
      { name: "网线", spec: "Cat5e", price: 29, model: "HK-CABLE", platform: "拼多多", note: "网线和水晶头" },
      { name: "支架", price: 29, model: "HK-BRACKET", platform: "拼多多", note: "铝合金支架" },
      { name: "显示器", spec: "19英寸", price: 799, model: "HK-MON", platform: "京东", note: "监控专用显示器" },
      { name: "交换机", spec: "8口POE", price: 99, model: "HK-SW", platform: "京东", note: "POE交换机" },
      { name: "网线钳", price: 29, model: "HK-CRIMP", platform: "拼多多", note: "压线钳" },
      { name: "螺丝刀", price: 15, model: "HK-T", platform: "拼多多", note: "含电钻" }
    ],
    steps: [
      { title: "规划布局", desc: "规划摄像头安装位置和网线走向", tip: "摄像头要覆盖关键区域" },
      { title: "安装摄像头支架", desc: "用螺丝将支架固定在墙壁或天花板上", tip: "支架要固定牢固" },
      { title: "安装摄像头", desc: "将摄像头安装到支架上，调整角度", tip: "摄像头角度要对准监控区域" },
      { title: "布网线", desc: "从摄像头位置布网线到录像机位置", tip: "网线要避免强电干扰" },
      { title: "制作水晶头", desc: "用网线钳制作水晶头，连接摄像头和交换机", tip: "水晶头要压接牢固" },
      { title: "安装硬盘", desc: "打开录像机机箱，安装2TB硬盘", tip: "硬盘要固定牢固" },
      { title: "安装录像机", desc: "将录像机放置在监控室，连接电源和显示器", tip: "录像机要通风良好" },
      { title: "连接交换机", desc: "将摄像头网线连接到POE交换机，交换机连接到录像机", tip: "POE交换机要供电充足" },
      { title: "配置IP地址", desc: "设置摄像头和录像机的IP地址", tip: "IP地址要在同一网段" },
      { title: "添加摄像头", desc: "在录像机中添加摄像头，搜索并添加", tip: "摄像头要在线才能添加" },
      { title: "设置录像模式", desc: "配置录像模式和存储计划", tip: "建议设置移动侦测录像" },
      { title: "测试监控", desc: "测试摄像头画面和录像功能", tip: "确保所有摄像头正常工作" },
      { title: "最终检查", desc: "检查摄像头画面清晰度和录像质量", tip: "建议在完成后测试远程查看" }
    ]
  },
  {
    id: "hikvision-camera-kit-repair",
    name: "海康威视摄像头维修",
    icon: "📹",
    category: "监控安防",
    categoryId: 7,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥300-600",
    budgetNum: 420,
    keywords: ["hikvision", "海康威视", "监控", "安防", "监控维修", "摄像头更换"],
    parts: [
      { name: "摄像头", spec: "400万像素", price: 299, model: "HK-CAM", platform: "京东", note: "POE供电" },
      { name: "拆机工具", price: 20, model: "HK-T", platform: "拼多多", note: "含螺丝刀、网线钳" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、网线钳", tip: "建议使用专业拆机工具" },
      { title: "关闭电源", desc: "关闭POE交换机电源", tip: "务必先断电" },
      { title: "拆卸旧摄像头", desc: "用螺丝刀拧下摄像头支架上的螺丝，取下旧摄像头", tip: "注意保存螺丝" },
      { title: "断开网线", desc: "断开摄像头与网线的连接", tip: "网线有水晶头，需小心" },
      { title: "安装新摄像头", desc: "将新摄像头安装到支架上，用螺丝固定", tip: "摄像头角度要对准监控区域" },
      { title: "连接网线", desc: "将网线连接到新摄像头", tip: "水晶头要插紧" },
      { title: "打开电源", desc: "打开POE交换机电源", tip: "通电前检查网线连接" },
      { title: "配置摄像头", desc: "在录像机中添加新摄像头，设置IP地址", tip: "摄像头要在线才能添加" },
      { title: "测试摄像头", desc: "测试摄像头画面是否正常", tip: "如果画面不显示，检查网线连接" },
      { title: "最终检查", desc: "检查摄像头画面清晰度", tip: "建议在完成后测试录像功能" }
    ]
  },
  // ====== 开发板 ======
  {
    id: "arduino-uno-r4-assembly",
    name: "Arduino Uno R4 组装教程",
    icon: "🧠",
    category: "创客电子开发板",
    categoryId: 8,
    type: "assembly",
    difficulty: "简单",
    time: "2-3小时",
    budget: "¥150-400",
    budgetNum: 250,
    keywords: ["arduino", "uno", "开发板", "创客", "开发板组装"],
    parts: [
      { name: "Arduino Uno R4主控板", price: 99, model: "ARDUINO-UNO-R4", platform: "京东", note: "含USB-C接口" },
      { name: "USB数据线", spec: "USB-C", price: 19, model: "ARDUINO-CABLE", platform: "京东", note: "数据线" },
      { name: "电源适配器", spec: "9V", price: 29, model: "ARDUINO-PWR", platform: "京东", note: "电源适配器" },
      { name: "面包板", spec: "400孔", price: 19, model: "ARDUINO-BB", platform: "拼多多", note: "面包板" },
      { name: "杜邦线", spec: "公对公", price: 19, model: "ARDUINO-DUPONT", platform: "拼多多", note: "杜邦线" },
      { name: "LED灯", spec: "5mm", price: 9, model: "ARDUINO-LED", platform: "拼多多", note: "LED灯" },
      { name: "电阻包", spec: "1K-10K", price: 19, model: "ARDUINO-RES", platform: "拼多多", note: "电阻包" },
      { name: "按钮开关", spec: "轻触开关", price: 9, model: "ARDUINO-BTN", platform: "拼多多", note: "按钮开关" },
      { name: "电位器", spec: "10K", price: 9, model: "ARDUINO-POT", platform: "拼多多", note: "电位器" },
      { name: "舵机", spec: "SG90", price: 29, model: "ARDUINO-SERVO", platform: "淘宝", note: "舵机" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上准备好所有零件和工具", tip: "建议使用防静电垫" },
      { title: "检查开发板", desc: "检查Arduino Uno R4主控板外观是否完好", tip: "开发板上的元件要完整" },
      { title: "连接电脑", desc: "通过USB-C数据线连接开发板和电脑", tip: "USB线要连接牢固" },
      { title: "安装驱动", desc: "安装Arduino Uno R4驱动程序", tip: "Windows需要安装驱动，Mac通常不需要" },
      { title: "安装Arduino IDE", desc: "安装Arduino IDE软件", tip: "从官网下载最新版本" },
      { title: "配置开发板", desc: "在Arduino IDE中选择Arduino Uno R4开发板", tip: "开发板型号要正确" },
      { title: "连接LED", desc: "通过面包板连接LED灯和220Ω电阻到开发板数字引脚", tip: "LED有正负极之分" },
      { title: "连接按钮", desc: "通过面包板连接按钮开关到开发板数字引脚", tip: "按钮需要上拉电阻" },
      { title: "编写Blink代码", desc: "编写Blink程序，控制LED闪烁", tip: "代码要正确" },
      { title: "下载程序", desc: "将程序下载到开发板", tip: "下载前确保串口正确" },
      { title: "测试LED", desc: "测试LED是否正常闪烁", tip: "如果LED不亮，检查接线" },
      { title: "连接舵机", desc: "将舵机连接到开发板数字引脚和电源", tip: "舵机需要外部电源" },
      { title: "编写舵机代码", desc: "编写舵机控制程序", tip: "舵机角度范围通常是0-180度" },
      { title: "测试舵机", desc: "测试舵机是否正常转动", tip: "如果舵机不动，检查接线" },
      { title: "最终检查", desc: "检查所有元件连接是否正确", tip: "确保所有功能正常" }
    ]
  },
  {
    id: "arduino-uno-r4-repair",
    name: "Arduino Uno R4 USB接口维修",
    icon: "🧠",
    category: "创客电子开发板",
    categoryId: 8,
    type: "repair",
    difficulty: "较高",
    time: "1-2小时",
    budget: "¥50-150",
    budgetNum: 90,
    keywords: ["arduino", "uno", "开发板", "开发板维修", "USB接口更换"],
    parts: [
      { name: "USB-C接口", price: 9, model: "ARDUINO-USB", platform: "淘宝", note: "USB-C插座" },
      { name: "拆机工具", price: 35, model: "ARDUINO-T", platform: "京东", note: "含电烙铁、镊子" },
      { name: "焊锡丝", price: 15, model: "ARDUINO-SOLDER", platform: "拼多多", note: "焊锡丝" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备电烙铁、镊子、焊锡丝", tip: "建议使用专业维修工具" },
      { title: "加热电烙铁", desc: "预热电烙铁", tip: "电烙铁温度要适中" },
      { title: "拆卸旧USB接口", desc: "用电烙铁焊下旧USB-C接口", tip: "焊接时要小心，避免损坏电路板" },
      { title: "清理焊点", desc: "清理电路板上的残留焊锡", tip: "焊点要清理干净" },
      { title: "安装新USB接口", desc: "将新USB-C接口焊接到电路板上", tip: "USB接口要对准位置" },
      { title: "检查焊点", desc: "检查焊点是否牢固，是否有虚焊", tip: "焊点要光亮饱满" },
      { title: "连接电脑", desc: "通过USB线连接开发板和电脑", tip: "USB线要连接牢固" },
      { title: "测试接口", desc: "测试USB接口是否正常工作", tip: "如果无法识别，检查焊点" },
      { title: "最终检查", desc: "检查开发板外观是否完好", tip: "建议在完成后测试上传程序" }
    ]
  },
  {
    id: "raspberry-pi-5-assembly",
    name: "树莓派 Raspberry Pi 5 组装教程",
    icon: "🧠",
    category: "创客电子开发板",
    categoryId: 8,
    type: "assembly",
    difficulty: "中等",
    time: "2-4小时",
    budget: "¥400-1000",
    budgetNum: 650,
    keywords: ["raspberrypi", "树莓派", "pi5", "开发板", "开发板组装"],
    parts: [
      { name: "Raspberry Pi 5主板", price: 399, model: "RPI5-MB", platform: "京东", note: "含BCM2712芯片" },
      { name: "电源适配器", spec: "5V/5A", price: 59, model: "RPI5-PWR", platform: "京东", note: "USB-C电源" },
      { name: "MicroSD卡", spec: "32GB", price: 49, model: "RPI5-SD", platform: "京东", note: "Class 10" },
      { name: "散热器", spec: "塔式散热器", price: 39, model: "RPI5-HEAT", platform: "淘宝", note: "含导热膏" },
      { name: "外壳", price: 49, model: "RPI5-SHELL", platform: "淘宝", note: "铝合金外壳" },
      { name: "HDMI线", spec: "HDMI 2.1", price: 19, model: "RPI5-HDMI", platform: "拼多多", note: "HDMI线" },
      { name: "键盘", price: 49, model: "RPI5-KB", platform: "拼多多", note: "无线键盘" },
      { name: "鼠标", price: 39, model: "RPI5-MOUSE", platform: "拼多多", note: "无线鼠标" },
      { name: "网线", spec: "Cat5e", price: 19, model: "RPI5-CABLE", platform: "拼多多", note: "网线" },
      { name: "风扇", spec: "40mm", price: 19, model: "RPI5-FAN", platform: "淘宝", note: "散热风扇" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上准备好所有零件和工具", tip: "建议使用防静电垫" },
      { title: "检查主板", desc: "检查Raspberry Pi 5主板外观是否完好", tip: "主板上的元件要完整" },
      { title: "安装散热器", desc: "将散热器安装到CPU上，涂抹导热膏", tip: "导热膏要均匀涂抹" },
      { title: "安装风扇", desc: "将散热风扇安装到散热器上，连接风扇排线", tip: "风扇方向要正确" },
      { title: "安装外壳", desc: "将主板装入铝合金外壳，用螺丝固定", tip: "外壳要对准位置" },
      { title: "烧录系统", desc: "使用Raspberry Pi Imager烧录Raspberry Pi OS到MicroSD卡", tip: "选择合适的系统版本" },
      { title: "插入SD卡", desc: "将烧录好的MicroSD卡插入主板SD卡槽", tip: "SD卡要插紧" },
      { title: "连接显示器", desc: "通过HDMI线连接主板和显示器", tip: "HDMI线要连接牢固" },
      { title: "连接键盘和鼠标", desc: "将无线键盘和鼠标接收器插入USB接口", tip: "USB接口要插紧" },
      { title: "连接网线", desc: "将网线插入以太网接口", tip: "网线要插紧" },
      { title: "连接电源", desc: "将USB-C电源适配器连接到主板", tip: "电源要连接牢固" },
      { title: "开机配置", desc: "开机并进行初始配置，设置语言、时区、网络", tip: "配置要正确" },
      { title: "更新系统", desc: "更新Raspberry Pi OS系统", tip: "更新前确保网络连接" },
      { title: "测试功能", desc: "测试显示器、键盘、鼠标、网络是否正常", tip: "确保所有功能正常" },
      { title: "最终检查", desc: "检查主板散热是否正常", tip: "建议在完成后测试温度" }
    ]
  },
  {
    id: "raspberry-pi-5-repair",
    name: "树莓派 Raspberry Pi 5 电源接口维修",
    icon: "🧠",
    category: "创客电子开发板",
    categoryId: 8,
    type: "repair",
    difficulty: "较高",
    time: "1-2小时",
    budget: "¥50-150",
    budgetNum: 90,
    keywords: ["raspberrypi", "树莓派", "pi5", "开发板", "开发板维修", "电源接口更换"],
    parts: [
      { name: "USB-C电源接口", price: 9, model: "RPI5-USB", platform: "淘宝", note: "USB-C插座" },
      { name: "拆机工具", price: 35, model: "RPI5-T", platform: "京东", note: "含电烙铁、镊子" },
      { name: "焊锡丝", price: 15, model: "RPI5-SOLDER", platform: "拼多多", note: "焊锡丝" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备电烙铁、镊子、焊锡丝", tip: "建议使用专业维修工具" },
      { title: "加热电烙铁", desc: "预热电烙铁", tip: "电烙铁温度要适中" },
      { title: "拆卸外壳", desc: "用螺丝刀拧下外壳上的螺丝，取下外壳", tip: "外壳有卡扣，需小心" },
      { title: "拆卸旧USB接口", desc: "用电烙铁焊下旧USB-C电源接口", tip: "焊接时要小心，避免损坏电路板" },
      { title: "清理焊点", desc: "清理电路板上的残留焊锡", tip: "焊点要清理干净" },
      { title: "安装新USB接口", desc: "将新USB-C电源接口焊接到电路板上", tip: "USB接口要对准位置" },
      { title: "检查焊点", desc: "检查焊点是否牢固，是否有虚焊", tip: "焊点要光亮饱满" },
      { title: "安装外壳", desc: "将外壳安装到主板上，用螺丝固定", tip: "外壳要对准位置" },
      { title: "连接电源", desc: "将USB-C电源适配器连接到主板", tip: "电源要连接牢固" },
      { title: "测试接口", desc: "测试USB-C电源接口是否正常工作", tip: "如果无法供电，检查焊点" },
      { title: "最终检查", desc: "检查开发板外观是否完好", tip: "建议在完成后测试开机" }
    ]
  },
  // ====== 传感器模块 ======
  {
    id: "sensor-kit-basic-assembly",
    name: "基础传感器套件组装教程",
    icon: "🌡️",
    category: "传感器与模块",
    categoryId: 9,
    type: "assembly",
    difficulty: "简单",
    time: "1-3小时",
    budget: "¥80-300",
    budgetNum: 170,
    keywords: ["sensor", "传感器", "套件", "传感器组装"],
    parts: [
      { name: "DHT11温湿度传感器", price: 19, model: "SENSOR-DHT11", platform: "拼多多", note: "温湿度传感器" },
      { name: "HC-SR04超声波传感器", price: 19, model: "SENSOR-HCSR04", platform: "拼多多", note: "超声波测距" },
      { name: "光敏电阻", price: 9, model: "SENSOR-LDR", platform: "拼多多", note: "光敏电阻" },
      { name: "MQ-2烟雾传感器", price: 29, model: "SENSOR-MQ2", platform: "拼多多", note: "烟雾传感器" },
      { name: "连接线", price: 9, model: "SENSOR-CABLE", platform: "拼多多", note: "杜邦线" },
      { name: "面包板", price: 19, model: "SENSOR-BB", platform: "拼多多", note: "面包板" },
      { name: "主控板", price: 99, model: "SENSOR-MCU", platform: "京东", note: "Arduino主控板" },
      { name: "LED灯", price: 9, model: "SENSOR-LED", platform: "拼多多", note: "LED灯" },
      { name: "电阻包", price: 19, model: "SENSOR-RES", platform: "拼多多", note: "电阻包" },
      { name: "继电器模块", price: 19, model: "SENSOR-RELAY", platform: "淘宝", note: "继电器模块" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上准备好所有传感器和工具", tip: "建议使用防静电垫" },
      { title: "连接主控板", desc: "将主控板放置在面包板上", tip: "主控板要固定牢固" },
      { title: "连接DHT11", desc: "将DHT11温湿度传感器连接到主控板，VCC接5V，GND接GND，DATA接数字引脚", tip: "传感器有正负极之分" },
      { title: "连接HC-SR04", desc: "将HC-SR04超声波传感器连接到主控板，VCC接5V，GND接GND，TRIG和ECHO接数字引脚", tip: "传感器要对准检测方向" },
      { title: "连接光敏电阻", desc: "将光敏电阻和10K电阻组成分压电路，连接到主控板模拟引脚", tip: "光敏电阻需要分压电阻" },
      { title: "连接MQ-2", desc: "将MQ-2烟雾传感器连接到主控板，VCC接5V，GND接GND，AOUT接模拟引脚", tip: "传感器需要预热" },
      { title: "连接LED", desc: "将LED灯和220Ω电阻连接到主控板数字引脚", tip: "LED有正负极之分" },
      { title: "连接继电器", desc: "将继电器模块连接到主控板，VCC接5V，GND接GND，IN接数字引脚", tip: "继电器需要外部电源" },
      { title: "编写代码", desc: "编写传感器数据读取代码", tip: "代码要正确" },
      { title: "下载程序", desc: "将程序下载到主控板", tip: "下载前确保串口正确" },
      { title: "测试传感器", desc: "测试各个传感器是否正常工作", tip: "如果传感器数据异常，检查接线" },
      { title: "测试LED", desc: "测试LED是否正常闪烁", tip: "如果LED不亮，检查接线" },
      { title: "测试继电器", desc: "测试继电器是否正常吸合", tip: "如果继电器不吸合，检查接线" },
      { title: "最终检查", desc: "检查所有传感器连接是否正确", tip: "确保所有功能正常" }
    ]
  },
  {
    id: "sensor-kit-basic-repair",
    name: "基础传感器套件维修",
    icon: "🌡️",
    category: "传感器与模块",
    categoryId: 9,
    type: "repair",
    difficulty: "简单",
    time: "0.5-1小时",
    budget: "¥20-100",
    budgetNum: 50,
    keywords: ["sensor", "传感器", "套件", "传感器维修", "传感器更换"],
    parts: [
      { name: "DHT11温湿度传感器", price: 19, model: "SENSOR-DHT11", platform: "拼多多", note: "温湿度传感器" },
      { name: "拆机工具", price: 10, model: "SENSOR-T", platform: "拼多多", note: "含镊子" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备镊子", tip: "建议使用专业工具" },
      { title: "关闭电源", desc: "断开主控板电源", tip: "务必先断电" },
      { title: "拆卸旧传感器", desc: "用镊子取下旧DHT11传感器", tip: "传感器有正负极之分" },
      { title: "安装新传感器", desc: "将新DHT11传感器插入面包板", tip: "传感器要对准位置" },
      { title: "连接电源", desc: "将主控板连接到电源", tip: "电源要连接牢固" },
      { title: "测试传感器", desc: "测试DHT11传感器是否正常工作", tip: "如果传感器数据异常，检查接线" },
      { title: "最终检查", desc: "检查传感器外观是否完好", tip: "建议在完成后测试数据" }
    ]
  },
  // ====== 3D打印 ======
  {
    id: "ender-3-v3-assembly",
    name: "Creality Ender 3 V3 3D打印机组装教程",
    icon: "🖨️",
    category: "3D打印与CNC",
    categoryId: 15,
    type: "assembly",
    difficulty: "较高",
    time: "12-30小时",
    budget: "¥2000-4500",
    budgetNum: 3000,
    keywords: ["ender3", "creality", "3dprinter", "3d打印", "3d打印机组装"],
    parts: [
      { name: "3D打印机套件", price: 1999, model: "ENDER3V3-KIT", platform: "京东", note: "Ender 3 V3套件" },
      { name: "打印耗材", spec: "PLA 1kg", price: 49, model: "ENDER3V3-FILAMENT", platform: "淘宝", note: "PLA耗材" },
      { name: "喷嘴", spec: "0.4mm", price: 9, model: "ENDER3V3-NOZZLE", platform: "淘宝", note: "黄铜喷嘴" },
      { name: "加热床", price: 49, model: "ENDER3V3-HEATBED", platform: "淘宝", note: "加热床" },
      { name: "步进电机", price: 39, model: "ENDER3V3-MOTOR", platform: "淘宝", note: "步进电机" },
      { name: "控制板", price: 99, model: "ENDER3V3-CONTROL", platform: "淘宝", note: "主板" },
      { name: "电源", spec: "350W", price: 49, model: "ENDER3V3-PWR", platform: "淘宝", note: "电源" },
      { name: "导轨", price: 39, model: "ENDER3V3-RAIL", platform: "淘宝", note: "线性导轨" },
      { name: "同步带", price: 19, model: "ENDER3V3-BELT", platform: "淘宝", note: "同步带" },
      { name: "热端", price: 49, model: "ENDER3V3-HOTEND", platform: "淘宝", note: "热端组件" },
      { name: "螺丝套装", price: 15, model: "ENDER3V3-SCREW", platform: "拼多多", note: "螺丝" },
      { name: "拆机工具", price: 35, model: "ENDER3V3-T", platform: "京东", note: "含螺丝刀、扳手" }
    ],
    steps: [
      { title: "开箱检查", desc: "检查所有零件和配件是否齐全", tip: "对照说明书检查零件" },
      { title: "组装框架", desc: "安装打印机框架和导轨", tip: "框架要垂直" },
      { title: "安装电机", desc: "固定步进电机和同步带", tip: "电机要固定牢固" },
      { title: "安装热端", desc: "安装喷嘴和加热块", tip: "喷嘴要拧紧" },
      { title: "安装加热床", desc: "固定加热床和玻璃", tip: "加热床要水平" },
      { title: "连接电路", desc: "连接控制板和电源线", tip: "接线要正确" },
      { title: "安装风扇", desc: "安装散热风扇", tip: "风扇方向要正确" },
      { title: "安装外壳", desc: "安装打印机外壳", tip: "外壳要对准位置" },
      { title: "调试校准", desc: "校准打印机参数，调平加热床", tip: "调平要仔细" },
      { title: "加载耗材", desc: "将PLA耗材加载到打印机", tip: "耗材要顺畅" },
      { title: "测试打印", desc: "打印测试模型", tip: "测试模型要简单" },
      { title: "调整参数", desc: "根据测试结果调整打印参数", tip: "参数要逐步调整" },
      { title: "最终检查", desc: "检查打印机外观和功能", tip: "确保所有功能正常" }
    ]
  },
  {
    id: "ender-3-v3-repair",
    name: "Creality Ender 3 V3 喷嘴维修",
    icon: "🖨️",
    category: "3D打印与CNC",
    categoryId: 15,
    type: "repair",
    difficulty: "中等",
    time: "0.5-1小时",
    budget: "¥20-100",
    budgetNum: 50,
    keywords: ["ender3", "creality", "3dprinter", "3d打印", "3d打印机维修", "喷嘴更换"],
    parts: [
      { name: "喷嘴", spec: "0.4mm", price: 9, model: "ENDER3V3-NOZZLE", platform: "淘宝", note: "黄铜喷嘴" },
      { name: "拆机工具", price: 20, model: "ENDER3V3-T", platform: "京东", note: "含喷嘴扳手" },
      { name: "加热块", price: 29, model: "ENDER3V3-HEAT", platform: "淘宝", note: "加热块" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备喷嘴扳手、新喷嘴", tip: "建议使用专业工具" },
      { title: "加热热端", desc: "将热端加热到200°C以上", tip: "加热温度要足够" },
      { title: "拆卸旧喷嘴", desc: "用喷嘴扳手拧下旧喷嘴", tip: "喷嘴很烫，注意安全" },
      { title: "清理加热块", desc: "清理加热块内的残留耗材", tip: "加热块要清理干净" },
      { title: "安装新喷嘴", desc: "将新喷嘴拧入加热块", tip: "喷嘴要拧紧" },
      { title: "测试打印", desc: "打印测试模型", tip: "测试喷嘴是否正常" },
      { title: "最终检查", desc: "检查喷嘴是否泄漏", tip: "建议在完成后观察打印效果" }
    ]
  },
  // ====== 电脑组装 ======
  {
    id: "gaming-pc-build-assembly",
    name: "游戏台式电脑组装教程",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "assembly",
    difficulty: "中等",
    time: "5-10小时",
    budget: "¥6000-18000",
    budgetNum: 11500,
    keywords: ["pc", "台式机", "组装", "游戏", "电脑组装"],
    parts: [
      { name: "CPU", spec: "Intel i7-14700K", price: 2599, model: "PC-CPU", platform: "京东", note: "Intel 14代CPU" },
      { name: "主板", spec: "Z790", price: 1499, model: "PC-MB", platform: "京东", note: "ATX主板" },
      { name: "内存", spec: "DDR5 32GB", price: 799, model: "PC-RAM", platform: "京东", note: "DDR5内存" },
      { name: "SSD", spec: "NVMe 1TB", price: 599, model: "PC-SSD", platform: "京东", note: "PCIe 4.0 SSD" },
      { name: "显卡", spec: "RTX 4070 Ti", price: 4999, model: "PC-GPU", platform: "京东", note: "独立显卡" },
      { name: "电源", spec: "750W金牌", price: 499, model: "PC-PSU", platform: "京东", note: "ATX电源" },
      { name: "机箱", price: 399, model: "PC-CASE", platform: "京东", note: "ATX机箱" },
      { name: "散热器", spec: "水冷240", price: 299, model: "PC-COOLER", platform: "京东", note: "一体式水冷" },
      { name: "风扇", spec: "120mm", price: 49, model: "PC-FAN", platform: "京东", note: "RGB风扇" },
      { name: "硬盘", spec: "2TB", price: 399, model: "PC-HDD", platform: "京东", note: "机械硬盘" },
      { name: "数据线", price: 19, model: "PC-CABLE", platform: "拼多多", note: "SATA线" },
      { name: "拆机工具", price: 25, model: "PC-T", platform: "京东", note: "含螺丝刀" }
    ],
    steps: [
      { title: "准备工作环境", desc: "在干净平整的桌面上准备好所有零件和工具", tip: "建议使用防静电垫" },
      { title: "准备机箱", desc: "打开机箱侧板，安装主板支架", tip: "机箱要放在稳定的地方" },
      { title: "安装CPU", desc: "安装CPU到主板，涂抹散热硅脂", tip: "CPU有方向，要对准插槽" },
      { title: "安装散热器", desc: "固定散热器和风扇", tip: "散热器要安装牢固" },
      { title: "安装内存", desc: "插入内存条到主板插槽", tip: "内存要插紧，听到咔哒声" },
      { title: "安装SSD", desc: "固定SSD到M.2插槽", tip: "SSD有方向，要对准插槽" },
      { title: "安装硬盘", desc: "将机械硬盘安装到机箱硬盘位", tip: "硬盘要固定牢固" },
      { title: "安装主板", desc: "将主板固定在机箱内", tip: "主板要对准铜柱" },
      { title: "安装电源", desc: "固定电源，连接供电线", tip: "电源要固定牢固" },
      { title: "安装显卡", desc: "插入显卡到PCIe插槽", tip: "显卡要插紧，固定螺丝" },
      { title: "连接数据线", desc: "连接SATA数据线和电源线", tip: "数据线要连接牢固" },
      { title: "连接前面板", desc: "连接前面板USB、音频、开关线", tip: "接线要对照主板说明书" },
      { title: "整理线缆", desc: "整理电源线和数据线", tip: "线缆要美观" },
      { title: "安装机箱侧板", desc: "将机箱侧板安装好", tip: "侧板要对准位置" },
      { title: "连接外设", desc: "连接显示器、键盘、鼠标", tip: "外设要连接牢固" },
      { title: "开机测试", desc: "启动电脑，检查硬件识别", tip: "如果无法开机，检查接线" },
      { title: "安装系统", desc: "安装Windows操作系统", tip: "系统要安装在SSD上" },
      { title: "安装驱动", desc: "安装显卡、主板驱动", tip: "驱动要从官网下载" },
      { title: "最终检查", desc: "检查电脑外观和功能", tip: "确保所有功能正常" }
    ]
  },
  {
    id: "gaming-pc-build-repair",
    name: "游戏台式电脑显卡维修",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥5000-10000",
    budgetNum: 7000,
    keywords: ["pc", "台式机", "组装", "游戏", "电脑维修", "显卡更换"],
    parts: [
      { name: "显卡", spec: "RTX 4070 Ti", price: 4999, model: "PC-GPU", platform: "京东", note: "独立显卡" },
      { name: "拆机工具", price: 20, model: "PC-T", platform: "京东", note: "含螺丝刀" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备螺丝刀、新显卡", tip: "建议使用专业工具" },
      { title: "关闭电脑", desc: "关闭电脑电源，拔下电源线", tip: "务必先关机断电" },
      { title: "打开机箱侧板", desc: "用螺丝刀拧下机箱侧板上的螺丝，取下侧板", tip: "侧板有卡扣，需小心" },
      { title: "断开显卡供电", desc: "断开显卡与电源的连接线", tip: "供电线有卡扣，需小心" },
      { title: "拆卸显卡", desc: "用螺丝刀拧下显卡挡板上的螺丝，取下旧显卡", tip: "显卡要垂直拔出" },
      { title: "安装新显卡", desc: "将新显卡插入PCIe插槽，用螺丝固定", tip: "显卡要插紧" },
      { title: "连接显卡供电", desc: "将电源连接线连接到新显卡", tip: "供电线要插紧" },
      { title: "安装机箱侧板", desc: "将机箱侧板安装好，用螺丝固定", tip: "侧板要对准位置" },
      { title: "连接显示器", desc: "将显示器连接线连接到新显卡", tip: "显示器线要连接牢固" },
      { title: "开机测试", desc: "启动电脑，检查显卡是否正常工作", tip: "如果显卡不工作，检查供电" },
      { title: "安装驱动", desc: "安装新显卡驱动", tip: "驱动要从NVIDIA官网下载" },
      { title: "最终检查", desc: "检查电脑外观和功能", tip: "建议在完成后测试游戏性能" }
    ]
  },
  // ====== 车载电子 ======
  {
    id: "dashcam-install-assembly",
    name: "行车记录仪安装教程",
    icon: "🚗",
    category: "车载电子",
    categoryId: 16,
    type: "assembly",
    difficulty: "简单",
    time: "1.5-3小时",
    budget: "¥300-1000",
    budgetNum: 600,
    keywords: ["dashcam", "行车记录仪", "车载", "行车记录仪安装"],
    parts: [
      { name: "行车记录仪", price: 299, model: "DASHCAM-MAIN", platform: "京东", note: "前后双摄" },
      { name: "存储卡", spec: "64GB", price: 49, model: "DASHCAM-SD", platform: "京东", note: "U3高速卡" },
      { name: "电源线", price: 19, model: "DASHCAM-CABLE", platform: "京东", note: "车载电源线" },
      { name: "安装支架", price: 19, model: "DASHCAM-MOUNT", platform: "京东", note: "吸盘支架" },
      { name: "后摄像头", price: 99, model: "DASHCAM-BACK", platform: "京东", note: "后摄摄像头" },
      { name: "后摄连接线", price: 29, model: "DASHCAM-BACK-CABLE", platform: "京东", note: "后摄延长线" },
      { name: "安装工具", price: 15, model: "DASHCAM-T", platform: "拼多多", note: "含撬棒" }
    ],
    steps: [
      { title: "准备设备", desc: "检查行车记录仪和配件是否齐全", tip: "对照说明书检查配件" },
      { title: "安装存储卡", desc: "将存储卡插入行车记录仪", tip: "存储卡要插紧" },
      { title: "安装支架", desc: "将吸盘支架固定到挡风玻璃上", tip: "支架要安装在后视镜附近" },
      { title: "安装记录仪", desc: "将行车记录仪固定在支架上", tip: "记录仪要对准前方" },
      { title: "安装后摄像头", desc: "将后摄像头安装到后挡风玻璃上", tip: "后摄像头要对准后方" },
      { title: "连接后摄连接线", desc: "将后摄连接线连接到行车记录仪", tip: "连接线要隐藏好" },
      { title: "连接电源线", desc: "将车载电源线连接到行车记录仪", tip: "电源线要连接牢固" },
      { title: "布线", desc: "隐藏电源线，沿着挡风玻璃边缘布线", tip: "布线要美观" },
      { title: "连接点烟器", desc: "将电源线插头插入车载点烟器", tip: "插头要插紧" },
      { title: "配置设备", desc: "设置录像参数，如分辨率、帧率、循环录像", tip: "参数要根据需求设置" },
      { title: "测试功能", desc: "测试前后摄像头录像功能", tip: "确保录像清晰" },
      { title: "最终检查", desc: "检查记录仪位置和布线", tip: "确保不影响驾驶视野" }
    ]
  },
  {
    id: "dashcam-install-repair",
    name: "行车记录仪存储卡维修",
    icon: "🚗",
    category: "车载电子",
    categoryId: 16,
    type: "repair",
    difficulty: "简单",
    time: "0.5-1小时",
    budget: "¥50-150",
    budgetNum: 90,
    keywords: ["dashcam", "行车记录仪", "车载", "行车记录仪维修", "存储卡更换"],
    parts: [
      { name: "存储卡", spec: "64GB", price: 49, model: "DASHCAM-SD", platform: "京东", note: "U3高速卡" },
      { name: "读卡器", price: 15, model: "DASHCAM-READER", platform: "拼多多", note: "读卡器" }
    ],
    steps: [
      { title: "准备工具和零件", desc: "准备新存储卡、读卡器", tip: "建议使用U3高速卡" },
      { title: "关闭记录仪", desc: "关闭行车记录仪电源", tip: "务必先断电" },
      { title: "拆卸旧存储卡", desc: "将旧存储卡从行车记录仪中取出", tip: "存储卡有弹出按钮" },
      { title: "备份数据", desc: "使用读卡器备份旧存储卡中的数据", tip: "重要视频要备份" },
      { title: "安装新存储卡", desc: "将新存储卡插入行车记录仪", tip: "存储卡要插紧" },
      { title: "格式化存储卡", desc: "在行车记录仪中格式化新存储卡", tip: "格式化会清除所有数据" },
      { title: "测试录像", desc: "测试行车记录仪录像功能", tip: "确保录像正常" },
      { title: "最终检查", desc: "检查存储卡是否正常工作", tip: "建议在完成后观察录像效果" }
    ]
  }
];

function getPlatform() {
  const platforms = ["京东", "淘宝", "拼多多", "闲鱼"];
  return platforms[Math.floor(Math.random() * platforms.length)];
}

function addPhoneDevice(brand, model, suffix, year, basePrice, screenSize, battery, cpu) {
  const baseId = brand.toLowerCase().replace(/\s/g, "-") + "-" + model.toLowerCase().replace(/\s/g, "-") + "-" + (suffix || "").toLowerCase().replace(/\s/g, "-") + "-" + year;
  const fullName = brand + " " + model + (suffix ? " " + suffix : "") + " " + year;
  const modelNum = "PH" + (1000 + year);
  
  devices.push({
    id: baseId + "-assembly",
    name: fullName + " 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "5-7小时",
    budget: "¥" + (basePrice * 0.8 | 0) + "-" + (basePrice * 2 | 0),
    budgetNum: basePrice * 1.5,
    keywords: [brand.toLowerCase(), model.toLowerCase(), "手机组装"],
    parts: [
      { name: "OLED屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.25), model: modelNum + "1", platform: "京东", note: "含触控层" },
      { name: "电池", spec: battery + "mAh", price: Math.floor(basePrice * 0.08), model: modelNum + "2", platform: "京东", note: "原装品质" },
      { name: "后置摄像头模组", price: Math.floor(basePrice * 0.2), model: modelNum + "3", platform: "淘宝", note: "多摄模组" },
      { name: "前置摄像头", price: Math.floor(basePrice * 0.05), model: modelNum + "4", platform: "淘宝", note: "自拍镜头" },
      { name: "主板", spec: cpu, price: Math.floor(basePrice * 0.4), model: modelNum + "5", platform: "闲鱼", note: "含处理器" },
      { name: "中框", price: Math.floor(basePrice * 0.1), model: modelNum + "6", platform: "淘宝", note: "金属材质" },
      { name: "后盖玻璃", price: Math.floor(basePrice * 0.06), model: modelNum + "7", platform: "拼多多", note: "玻璃背板" },
      { name: "充电口排线", price: Math.floor(basePrice * 0.03), model: modelNum + "8", platform: "京东", note: "含充电接口" },
      { name: "扬声器", price: Math.floor(basePrice * 0.02), model: modelNum + "9", platform: "拼多多", note: "立体声扬声器" },
      { name: "振动马达", price: Math.floor(basePrice * 0.02), model: modelNum + "0", platform: "淘宝", note: "线性马达" },
      { name: "防水胶", price: 19, model: modelNum + "A", platform: "拼多多", note: "密封胶套装" },
      { name: "螺丝套装", price: 9, model: modelNum + "B", platform: "拼多多", note: "全套螺丝" },
      { name: "拆机工具", price: 49, model: modelNum + "T", platform: "京东", note: "专业拆机套装" }
    ],
    steps: [
      { title: "准备工作环境", desc: "铺设防静电垫，佩戴防静电手环，准备所有零件和工具", tip: "务必在防静电环境下操作" },
      { title: "安装中框", desc: "取出中框，检查侧边按键和静音开关是否正常", tip: "中框是手机的骨架，检查完好" },
      { title: "安装主板", desc: "将主板放入中框对应位置，用螺丝固定主板支架", tip: "螺丝位置和长度必须对应" },
      { title: "连接充电口排线", desc: "将充电口排线连接到主板对应接口，扣紧排线座", tip: "排线较脆弱，操作要轻" },
      { title: "安装扬声器", desc: "将扬声器放入中框底部位置，连接扬声器排线", tip: "扬声器有正反方向" },
      { title: "安装振动马达", desc: "将振动马达放入中框对应位置，连接马达排线", tip: "对准固定座位置" },
      { title: "安装电池", desc: "粘贴电池胶贴，放入电池仓，连接电池排线", tip: "电池胶贴要粘贴牢固" },
      { title: "安装摄像头", desc: "安装后置和前置摄像头模组，连接排线", tip: "摄像头排线非常脆弱" },
      { title: "安装屏幕总成", desc: "对齐中框顶部，向下扣合，连接屏幕排线", tip: "屏幕排线需依次连接" },
      { title: "安装后盖", desc: "涂抹防水胶，将后盖对齐中框压紧", tip: "防水胶涂抹要均匀" },
      { title: "拧入底部螺丝", desc: "拧入充电口两侧的五角螺丝", tip: "螺丝力度适中" },
      { title: "功能测试", desc: "开机测试屏幕、摄像头、扬声器等功能", tip: "确保所有功能正常" },
      { title: "静置固化", desc: "平放静置30分钟让防水胶固化", tip: "固化期间不要移动手机" }
    ]
  });
  
  devices.push({
    id: baseId + "-repair",
    name: fullName + " 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥" + (basePrice * 0.2 | 0) + "-" + (basePrice * 0.4 | 0),
    budgetNum: basePrice * 0.3,
    keywords: [brand.toLowerCase(), model.toLowerCase(), "手机维修"],
    parts: [
      { name: "OLED屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.25), model: modelNum + "1", platform: "京东", note: "含触控层、前置摄像头" },
      { name: "防水胶", price: 19, model: modelNum + "A", platform: "拼多多", note: "屏幕防水胶" },
      { name: "拆机工具", price: 29, model: modelNum + "T", platform: "京东", note: "专用拆机套装" }
    ],
    steps: [
      { title: "准备工具", desc: "准备加热台、吸盘、塑料撬片、螺丝刀、防静电手环", tip: "温度设置80-90°C" },
      { title: "关闭手机", desc: "长按电源键关机", tip: "务必先关机" },
      { title: "拆卸底部螺丝", desc: "用五角螺丝刀拧下充电口两侧螺丝", tip: "螺丝长度相同" },
      { title: "加热后盖", desc: "将手机背面朝上放在加热台上加热2-3分钟", tip: "加热时间不要过长" },
      { title: "打开后盖", desc: "用吸盘拉起后盖，用塑料撬片划开防水胶", tip: "操作要慢" },
      { title: "断开电池", desc: "断开电池排线，确保安全", tip: "断开电池是安全第一步" },
      { title: "断开屏幕排线", desc: "依次断开屏幕显示排线、触控排线", tip: "排线座向上挑起" },
      { title: "拆卸屏幕支架", desc: "拧下屏幕支架螺丝，取下支架", tip: "螺丝位置不同" },
      { title: "取下旧屏幕", desc: "将旧屏幕取下", tip: "注意屏幕底部连接" },
      { title: "清洁中框", desc: "用酒精棉片清洁中框边缘", tip: "确保干净无残留" },
      { title: "粘贴防水胶", desc: "将新防水胶粘贴在中框边缘", tip: "注意正反面" },
      { title: "安装新屏幕", desc: "将新屏幕对齐中框扣合", tip: "屏幕排线朝向主板" },
      { title: "连接排线", desc: "依次扣合触控排线和显示排线", tip: "按压到位" },
      { title: "安装支架", desc: "将屏幕支架放回原位，用螺丝固定", tip: "螺丝位置对应" },
      { title: "连接电池", desc: "扣合电池排线", tip: "轻轻向上拉确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐中框压紧", tip: "四周贴合" },
      { title: "拧入螺丝", desc: "拧入底部五角螺丝", tip: "力度适中" },
      { title: "开机测试", desc: "开机测试屏幕显示、触摸功能", tip: "测试通过后完成" },
      { title: "静置固化", desc: "平放静置30分钟", tip: "固化期间避免弯折" }
    ]
  });
}

function addTabletDevice(brand, model, year, basePrice, screenSize, battery) {
  const baseId = brand.toLowerCase().replace(/\s/g, "-") + "-" + model.toLowerCase().replace(/\s/g, "-") + "-" + year;
  const fullName = brand + " " + model + " " + year;
  const modelNum = "TB" + (2000 + year);
  
  devices.push({
    id: baseId + "-assembly",
    name: fullName + " 组装教程",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥" + (basePrice * 0.8 | 0) + "-" + (basePrice * 2 | 0),
    budgetNum: basePrice * 1.5,
    keywords: [brand.toLowerCase(), "平板", "tablet"],
    parts: [
      { name: "屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.3), model: modelNum + "1", platform: "京东", note: "含触控层" },
      { name: "电池", spec: battery + "mAh", price: Math.floor(basePrice * 0.1), model: modelNum + "2", platform: "京东", note: "原装品质" },
      { name: "主板", price: Math.floor(basePrice * 0.4), model: modelNum + "3", platform: "闲鱼", note: "含处理器" },
      { name: "外壳", price: Math.floor(basePrice * 0.1), model: modelNum + "4", platform: "淘宝", note: "铝合金外壳" },
      { name: "后置摄像头", price: Math.floor(basePrice * 0.1), model: modelNum + "5", platform: "淘宝", note: "含镜头保护玻璃" },
      { name: "前置摄像头", price: Math.floor(basePrice * 0.05), model: modelNum + "6", platform: "淘宝", note: "自拍镜头" },
      { name: "扬声器", price: Math.floor(basePrice * 0.05), model: modelNum + "7", platform: "拼多多", note: "四扬声器" },
      { name: "防水胶", price: 19, model: modelNum + "A", platform: "拼多多", note: "密封胶" }
    ],
    steps: [
      { title: "准备工作环境", desc: "铺设防静电垫，佩戴防静电手环", tip: "务必在防静电环境下操作" },
      { title: "安装主板", desc: "将主板放入外壳对应位置", tip: "注意主板方向" },
      { title: "连接电池", desc: "连接电池排线到主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装摄像头", desc: "安装前置和后置摄像头", tip: "摄像头排线非常脆弱" },
      { title: "安装扬声器", desc: "安装扬声器组件", tip: "扬声器有正反方向" },
      { title: "安装屏幕", desc: "将屏幕总成对齐外壳，扣合排线", tip: "屏幕排线非常脆弱" },
      { title: "涂抹防水胶", desc: "在屏幕边缘涂抹防水胶", tip: "防水胶涂抹均匀" },
      { title: "贴合屏幕", desc: "将屏幕压紧贴合", tip: "确保四周完全贴合" },
      { title: "功能测试", desc: "开机测试屏幕、摄像头、扬声器等功能", tip: "确保所有功能正常" }
    ]
  });
  
  devices.push({
    id: baseId + "-repair",
    name: fullName + " 屏幕维修",
    icon: "📱",
    category: "手机组装与维修",
    categoryId: 1,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥" + (basePrice * 0.3 | 0) + "-" + (basePrice * 0.6 | 0),
    budgetNum: basePrice * 0.45,
    keywords: [brand.toLowerCase(), "平板", "tablet", "维修"],
    parts: [
      { name: "屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.3), model: modelNum + "1", platform: "京东", note: "含触控层" },
      { name: "防水胶", price: 19, model: modelNum + "A", platform: "拼多多", note: "屏幕防水胶" },
      { name: "拆机工具", price: 29, model: modelNum + "T", platform: "京东", note: "专用拆机工具" }
    ],
    steps: [
      { title: "准备工具", desc: "准备加热台、吸盘、塑料撬片、螺丝刀", tip: "温度设置70-80°C" },
      { title: "关闭平板", desc: "长按电源键关机", tip: "务必先关机" },
      { title: "加热屏幕", desc: "将平板屏幕朝上放在加热台上，加热2-3分钟", tip: "加热时间不要过长" },
      { title: "撬开屏幕", desc: "用吸盘吸附屏幕，轻轻拉起，用塑料撬片沿边缘划开", tip: "操作要慢，避免损坏" },
      { title: "断开排线", desc: "依次断开屏幕排线和电池排线", tip: "断开电池是安全第一步" },
      { title: "取下旧屏幕", desc: "将旧屏幕取下", tip: "注意排线连接" },
      { title: "清洁外壳", desc: "用酒精棉片清洁外壳边缘", tip: "确保干净无残留" },
      { title: "粘贴防水胶", desc: "将新防水胶粘贴在外壳边缘", tip: "注意正反面" },
      { title: "安装新屏幕", desc: "将新屏幕对齐外壳，向下扣合", tip: "屏幕排线朝向主板" },
      { title: "连接排线", desc: "依次扣合屏幕排线和电池排线", tip: "按压到位" },
      { title: "开机测试", desc: "开机测试屏幕显示和触摸功能", tip: "测试通过后完成" }
    ]
  });
}

function addLaptopDevice(brand, model, year, basePrice, screenSize) {
  const baseId = brand.toLowerCase().replace(/\s/g, "-") + "-" + model.toLowerCase().replace(/\s/g, "-") + "-" + year;
  const fullName = brand + " " + model + " " + year;
  const modelNum = "LT" + (3000 + year);
  
  devices.push({
    id: baseId + "-assembly",
    name: fullName + " 组装教程",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥" + (basePrice * 0.8 | 0) + "-" + (basePrice * 2 | 0),
    budgetNum: basePrice * 1.5,
    keywords: [brand.toLowerCase(), "笔记本", "laptop"],
    parts: [
      { name: "屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.2), model: modelNum + "1", platform: "京东", note: "IPS或OLED" },
      { name: "电池", spec: "50Wh", price: Math.floor(basePrice * 0.08), model: modelNum + "2", platform: "京东", note: "原装品质" },
      { name: "主板", price: Math.floor(basePrice * 0.4), model: modelNum + "3", platform: "闲鱼", note: "含处理器" },
      { name: "外壳", price: Math.floor(basePrice * 0.15), model: modelNum + "4", platform: "淘宝", note: "铝合金外壳" },
      { name: "键盘", price: Math.floor(basePrice * 0.08), model: modelNum + "5", platform: "淘宝", note: "背光键盘" },
      { name: "触控板", price: Math.floor(basePrice * 0.05), model: modelNum + "6", platform: "淘宝", note: "含触控板排线" },
      { name: "散热模组", price: Math.floor(basePrice * 0.08), model: modelNum + "7", platform: "淘宝", note: "含风扇和热管" },
      { name: "螺丝套装", price: 15, model: modelNum + "A", platform: "拼多多", note: "全套螺丝" }
    ],
    steps: [
      { title: "准备工作环境", desc: "铺设防静电垫，佩戴防静电手环", tip: "务必在防静电环境下操作" },
      { title: "安装主板", desc: "将主板放入外壳对应位置", tip: "注意主板方向" },
      { title: "安装散热模组", desc: "安装散热模组，连接风扇排线", tip: "硅脂涂抹要均匀" },
      { title: "安装键盘", desc: "将键盘安装到外壳，连接键盘排线", tip: "键盘有卡扣，注意对齐" },
      { title: "安装触控板", desc: "将触控板安装到外壳，连接触控板排线", tip: "触控板排线较脆弱" },
      { title: "连接电池", desc: "连接电池排线到主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装屏幕", desc: "将屏幕总成安装到外壳，连接屏幕排线", tip: "屏幕排线非常脆弱" },
      { title: "安装外壳", desc: "将上下外壳扣合，用螺丝固定", tip: "螺丝位置和长度必须对应" },
      { title: "功能测试", desc: "开机测试屏幕、键盘、触控板等功能", tip: "确保所有功能正常" }
    ]
  });
  
  devices.push({
    id: baseId + "-repair",
    name: fullName + " 屏幕维修",
    icon: "💻",
    category: "电脑改装",
    categoryId: 14,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥" + (basePrice * 0.2 | 0) + "-" + (basePrice * 0.4 | 0),
    budgetNum: basePrice * 0.3,
    keywords: [brand.toLowerCase(), "笔记本", "laptop", "维修"],
    parts: [
      { name: "屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.2), model: modelNum + "1", platform: "京东", note: "含触控层" },
      { name: "拆机工具", price: 29, model: modelNum + "T", platform: "京东", note: "专用拆机工具" }
    ],
    steps: [
      { title: "准备工具", desc: "准备螺丝刀、塑料撬片", tip: "准备合适的螺丝刀头" },
      { title: "关闭电脑", desc: "长按电源键关机，断开电源适配器", tip: "务必先关机断电" },
      { title: "拆卸底部螺丝", desc: "用螺丝刀拧下底部所有螺丝", tip: "螺丝位置和长度不同，建议按顺序摆放" },
      { title: "打开后盖", desc: "用塑料撬片沿边缘轻轻撬开后盖", tip: "操作要慢，避免损坏卡扣" },
      { title: "断开电池", desc: "断开电池排线，确保安全", tip: "断开电池是安全第一步" },
      { title: "断开屏幕排线", desc: "断开屏幕显示排线和触控排线", tip: "排线座向上挑起" },
      { title: "拆卸屏幕边框", desc: "拧下屏幕边框螺丝，取下边框", tip: "边框螺丝较小" },
      { title: "取下旧屏幕", desc: "将旧屏幕取下", tip: "注意屏幕四周的螺丝" },
      { title: "安装新屏幕", desc: "将新屏幕安装到边框，连接排线", tip: "屏幕排线朝向主板" },
      { title: "安装边框", desc: "将边框放回原位，用螺丝固定", tip: "螺丝位置对应" },
      { title: "连接排线", desc: "依次扣合触控排线和显示排线", tip: "按压到位" },
      { title: "连接电池", desc: "扣合电池排线", tip: "轻轻向上拉确认扣紧" },
      { title: "安装后盖", desc: "将后盖对齐扣合", tip: "卡扣要完全扣紧" },
      { title: "拧入螺丝", desc: "拧入底部螺丝", tip: "螺丝位置和长度对应" },
      { title: "开机测试", desc: "开机测试屏幕显示和触摸功能", tip: "测试通过后完成" }
    ]
  });
}

function addWatchDevice(brand, model, year, basePrice, screenSize) {
  const baseId = brand.toLowerCase().replace(/\s/g, "-") + "-" + model.toLowerCase().replace(/\s/g, "-") + "-" + year;
  const fullName = brand + " " + model + " " + year;
  const modelNum = "WT" + (4000 + year);
  
  devices.push({
    id: baseId + "-assembly",
    name: fullName + " 组装教程",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "assembly",
    difficulty: "较高",
    time: "4-6小时",
    budget: "¥" + (basePrice * 0.8 | 0) + "-" + (basePrice * 2 | 0),
    budgetNum: basePrice * 1.5,
    keywords: [brand.toLowerCase(), "手表", "watch"],
    parts: [
      { name: "屏幕总成", spec: screenSize + "英寸", price: Math.floor(basePrice * 0.3), model: modelNum + "1", platform: "京东", note: "含触控层" },
      { name: "电池", spec: "250mAh", price: Math.floor(basePrice * 0.08), model: modelNum + "2", platform: "京东", note: "原装品质" },
      { name: "主板", price: Math.floor(basePrice * 0.4), model: modelNum + "3", platform: "闲鱼", note: "含处理器" },
      { name: "表带", price: Math.floor(basePrice * 0.05), model: modelNum + "4", platform: "淘宝", note: "原装表带" },
      { name: "心率传感器", price: Math.floor(basePrice * 0.06), model: modelNum + "5", platform: "淘宝", note: "含血氧传感器" },
      { name: "外壳", price: Math.floor(basePrice * 0.08), model: modelNum + "6", platform: "淘宝", note: "金属或陶瓷" },
      { name: "防水胶", price: 9, model: modelNum + "A", platform: "拼多多", note: "密封胶" },
      { name: "螺丝套装", price: 5, model: modelNum + "B", platform: "拼多多", note: "全套螺丝" }
    ],
    steps: [
      { title: "准备工作环境", desc: "铺设防静电垫，佩戴防静电手环", tip: "手表零件微小，需格外小心" },
      { title: "安装主板", desc: "将主板放入外壳对应位置", tip: "注意主板方向" },
      { title: "连接电池", desc: "连接电池排线到主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装传感器", desc: "安装心率和血氧传感器", tip: "传感器需对准位置" },
      { title: "安装屏幕", desc: "将屏幕总成对齐外壳，扣合排线", tip: "屏幕排线非常脆弱" },
      { title: "安装表带", desc: "将表带安装到表耳位置", tip: "注意表带方向" },
      { title: "涂抹防水胶", desc: "在屏幕边缘涂抹防水胶", tip: "防水胶涂抹均匀" },
      { title: "压紧屏幕", desc: "将屏幕压紧贴合", tip: "确保四周完全贴合" },
      { title: "功能测试", desc: "开机测试屏幕、心率、蓝牙等功能", tip: "确保所有功能正常" },
      { title: "静置固化", desc: "平放静置30分钟", tip: "固化期间不要移动" }
    ]
  });
  
  devices.push({
    id: baseId + "-repair",
    name: fullName + " 电池维修",
    icon: "⌚",
    category: "智能穿戴",
    categoryId: 5,
    type: "repair",
    difficulty: "较高",
    time: "2-3小时",
    budget: "¥" + (basePrice * 0.3 | 0) + "-" + (basePrice * 0.6 | 0),
    budgetNum: basePrice * 0.45,
    keywords: [brand.toLowerCase(), "手表", "watch", "维修"],
    parts: [
      { name: "电池", spec: "250mAh", price: Math.floor(basePrice * 0.08), model: modelNum + "2", platform: "京东", note: "原装品质，带胶贴" },
      { name: "防水胶", price: 9, model: modelNum + "A", platform: "拼多多", note: "屏幕防水胶" },
      { name: "拆机工具", price: 29, model: modelNum + "T", platform: "京东", note: "专用拆机工具" }
    ],
    steps: [
      { title: "准备工具", desc: "准备加热台、塑料撬片、螺丝刀", tip: "温度设置70-80°C" },
      { title: "关闭手表", desc: "长按电源键关机", tip: "务必先关机" },
      { title: "加热屏幕", desc: "将手表屏幕朝上放在加热台上，加热2分钟", tip: "加热时间不要过长" },
      { title: "撬开屏幕", desc: "用塑料撬片沿边缘轻轻撬开屏幕", tip: "操作要慢，避免损坏" },
      { title: "断开电池", desc: "用撬棒断开电池排线", tip: "断开电池是安全第一步" },
      { title: "移除旧电池", desc: "用酒精棉片软化电池胶贴，取下旧电池", tip: "注意不要刺破电池" },
      { title: "安装新电池", desc: "粘贴新电池胶贴，放入电池仓", tip: "电池胶贴要粘贴牢固" },
      { title: "连接电池", desc: "扣合电池排线到主板", tip: "轻轻向上拉确认扣紧" },
      { title: "清洁屏幕", desc: "用酒精棉片清洁屏幕边缘", tip: "确保干净无残留" },
      { title: "粘贴防水胶", desc: "将新防水胶粘贴在屏幕边缘", tip: "防水胶有正反面" },
      { title: "贴合屏幕", desc: "将屏幕对齐外壳，从顶部向下压紧", tip: "确保四周完全贴合" },
      { title: "开机测试", desc: "开机测试电池充电和功能", tip: "测试通过后完成" },
      { title: "静置固化", desc: "平放静置30分钟", tip: "固化期间避免弯折" }
    ]
  });
}

function addEarphoneDevice(brand, model, year, basePrice) {
  const baseId = brand.toLowerCase().replace(/\s/g, "-") + "-" + model.toLowerCase().replace(/\s/g, "-") + "-" + year;
  const fullName = brand + " " + model + " " + year;
  const modelNum = "EP" + (5000 + year);
  
  devices.push({
    id: baseId + "-assembly",
    name: fullName + " 组装教程",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "assembly",
    difficulty: "中等",
    time: "3-4小时",
    budget: "¥" + (basePrice * 0.8 | 0) + "-" + (basePrice * 2 | 0),
    budgetNum: basePrice * 1.5,
    keywords: [brand.toLowerCase(), "耳机", "earphone"],
    parts: [
      { name: "扬声器单元", price: Math.floor(basePrice * 0.2), model: modelNum + "1", platform: "淘宝", note: "动圈或动铁单元" },
      { name: "耳机电池", price: Math.floor(basePrice * 0.1), model: modelNum + "2", platform: "京东", note: "纽扣电池" },
      { name: "主板", price: Math.floor(basePrice * 0.35), model: modelNum + "3", platform: "闲鱼", note: "含蓝牙芯片" },
      { name: "充电盒电池", price: Math.floor(basePrice * 0.08), model: modelNum + "4", platform: "京东", note: "内置锂电池" },
      { name: "耳塞套", price: Math.floor(basePrice * 0.03), model: modelNum + "5", platform: "拼多多", note: "硅胶耳塞" },
      { name: "耳机外壳", price: Math.floor(basePrice * 0.1), model: modelNum + "6", platform: "淘宝", note: "塑料或金属" },
      { name: "充电盒外壳", price: Math.floor(basePrice * 0.1), model: modelNum + "7", platform: "淘宝", note: "含充电接口" },
      { name: "磁铁", price: 5, model: modelNum + "8", platform: "拼多多", note: "吸附磁铁" }
    ],
    steps: [
      { title: "准备工作环境", desc: "铺设防静电垫，佩戴防静电手环", tip: "耳机零件微小，需格外小心" },
      { title: "安装主板", desc: "将主板放入耳机外壳", tip: "注意主板方向" },
      { title: "连接电池", desc: "将电池连接到主板", tip: "焊点要牢固" },
      { title: "安装扬声器", desc: "将扬声器单元安装到外壳", tip: "扬声器有正反方向" },
      { title: "安装麦克风", desc: "安装麦克风到耳机内部", tip: "麦克风要靠近出声孔" },
      { title: "组装耳机外壳", desc: "将耳机外壳扣合", tip: "确保卡扣完全扣紧" },
      { title: "安装耳塞套", desc: "将耳塞套安装到耳机出音嘴", tip: "选择合适尺寸" },
      { title: "安装充电盒主板", desc: "将充电盒主板放入充电盒", tip: "注意充电触点位置" },
      { title: "安装充电盒电池", desc: "将电池连接到充电盒主板", tip: "电池胶贴要粘贴牢固" },
      { title: "安装磁铁", desc: "将磁铁安装到充电盒和耳机", tip: "确保吸附力正常" },
      { title: "组装充电盒", desc: "将充电盒外壳扣合", tip: "确保卡扣完全扣紧" },
      { title: "功能测试", desc: "测试蓝牙连接、音质、充电功能", tip: "确保所有功能正常" }
    ]
  });
  
  devices.push({
    id: baseId + "-repair",
    name: fullName + " 电池维修",
    icon: "🔊",
    category: "音频设备",
    categoryId: 3,
    type: "repair",
    difficulty: "中等",
    time: "1-2小时",
    budget: "¥" + (basePrice * 0.3 | 0) + "-" + (basePrice * 0.6 | 0),
    budgetNum: basePrice * 0.45,
    keywords: [brand.toLowerCase(), "耳机", "earphone", "维修"],
    parts: [
      { name: "耳机电池", price: Math.floor(basePrice * 0.1), model: modelNum + "2", platform: "京东", note: "纽扣电池，带胶贴" },
      { name: "拆机工具", price: 19, model: modelNum + "T", platform: "拼多多", note: "撬片、镊子套装" }
    ],
    steps: [
      { title: "准备工具", desc: "准备塑料撬片、镊子、热风枪", tip: "热风枪温度设置60-70°C" },
      { title: "加热外壳", desc: "用热风枪加热耳机外壳接缝处", tip: "加热时间不要过长" },
      { title: "撬开外壳", desc: "用塑料撬片沿接缝处轻轻撬开", tip: "操作要慢，避免损坏" },
      { title: "断开电池", desc: "用镊子断开电池焊点", tip: "注意不要损坏主板" },
      { title: "移除旧电池", desc: "将旧电池从外壳中取出", tip: "注意不要刺破电池" },
      { title: "安装新电池", desc: "将新电池放入外壳", tip: "注意电池方向" },
      { title: "焊接电池", desc: "将电池焊点焊接到主板", tip: "焊点要牢固" },
      { title: "清洁外壳", desc: "用酒精棉片清洁外壳边缘", tip: "确保干净无残留" },
      { title: "扣合外壳", desc: "将外壳对齐扣合", tip: "确保卡扣完全扣紧" },
      { title: "功能测试", desc: "测试蓝牙连接和充电功能", tip: "测试通过后完成" }
    ]
  });
}

// ====== 批量添加真实存在的设备 ======

// iPhone系列
addPhoneDevice("Apple", "iPhone", "8 Plus", 2017, 3500, "5.5", 2691, "A11");
addPhoneDevice("Apple", "iPhone", "8", 2017, 3000, "4.7", 1821, "A11");
addPhoneDevice("Apple", "iPhone", "SE", 2020, 2500, "4.7", 1821, "A13");
addPhoneDevice("Apple", "iPhone", "SE", 2022, 3000, "4.7", 2018, "A15");
addPhoneDevice("Apple", "iPhone", "XR", 2018, 3500, "6.1", 2942, "A12");
addPhoneDevice("Apple", "iPhone", "XS", 2018, 4500, "5.8", 2658, "A12");
addPhoneDevice("Apple", "iPhone", "XS Max", 2018, 5000, "6.5", 3174, "A12");
addPhoneDevice("Apple", "iPhone", "12", 2020, 4500, "6.1", 2815, "A14");
addPhoneDevice("Apple", "iPhone", "12 Mini", 2020, 4000, "5.4", 2227, "A14");
addPhoneDevice("Apple", "iPhone", "12 Pro", 2020, 6000, "6.1", 2815, "A14");
addPhoneDevice("Apple", "iPhone", "12 Pro Max", 2020, 7000, "6.7", 3687, "A14");
addPhoneDevice("Apple", "iPhone", "13", 2021, 5000, "6.1", 3227, "A15");
addPhoneDevice("Apple", "iPhone", "13 Mini", 2021, 4500, "5.4", 2406, "A15");
addPhoneDevice("Apple", "iPhone", "13 Pro", 2021, 6500, "6.1", 3095, "A15");
addPhoneDevice("Apple", "iPhone", "13 Pro Max", 2021, 7500, "6.7", 4352, "A15");
addPhoneDevice("Apple", "iPhone", "14", 2022, 5500, "6.1", 3274, "A15");
addPhoneDevice("Apple", "iPhone", "14 Plus", 2022, 6000, "6.7", 4325, "A15");
addPhoneDevice("Apple", "iPhone", "14 Pro", 2022, 7000, "6.1", 3274, "A16");
addPhoneDevice("Apple", "iPhone", "14 Pro Max", 2022, 8000, "6.7", 4410, "A16");

// iPad系列
addTabletDevice("Apple", "iPad Pro 11", 2022, 6000, "11", 7500);
addTabletDevice("Apple", "iPad Pro 12.9", 2022, 8000, "12.9", 10000);
addTabletDevice("Apple", "iPad Air 5", 2022, 4500, "10.9", 7500);
addTabletDevice("Apple", "iPad 10", 2022, 3000, "10.9", 6400);
addTabletDevice("Apple", "iPad mini 6", 2021, 3500, "8.3", 5000);
addTabletDevice("Samsung", "Galaxy Tab S9", 2023, 4500, "11", 8000);
addTabletDevice("Samsung", "Galaxy Tab S9+", 2023, 6000, "12.4", 10000);
addTabletDevice("Samsung", "Galaxy Tab S9 Ultra", 2023, 8000, "14.6", 12000);
addTabletDevice("Huawei", "MatePad Pro 12.6", 2023, 5000, "12.6", 10000);
addTabletDevice("Xiaomi", "Pad 6", 2023, 2500, "11", 8600);

// MacBook系列
addLaptopDevice("Apple", "MacBook Pro 13", 2022, 10000, "13.3");
addLaptopDevice("Apple", "MacBook Pro 14", 2023, 15000, "14.2");
addLaptopDevice("Apple", "MacBook Pro 16", 2023, 18000, "16.2");
addLaptopDevice("Apple", "MacBook Air 13", 2022, 8000, "13.6");
addLaptopDevice("Apple", "MacBook Air 15", 2023, 9000, "15.3");
addLaptopDevice("Dell", "XPS 13", 2023, 8000, "13.4");
addLaptopDevice("Dell", "XPS 15", 2023, 10000, "15.6");
addLaptopDevice("Lenovo", "ThinkPad X1", 2023, 12000, "14");
addLaptopDevice("Lenovo", "Legion 5", 2023, 8000, "15.6");
addLaptopDevice("HP", "Spectre 14", 2023, 9000, "14");
addLaptopDevice("Asus", "ROG 15", 2023, 10000, "15.6");

// Apple Watch系列
addWatchDevice("Apple", "Watch Series 1", 2015, 2000, "1.3");
addWatchDevice("Apple", "Watch Series 2", 2016, 2200, "1.3");
addWatchDevice("Apple", "Watch Series 3", 2017, 2500, "1.3");
addWatchDevice("Apple", "Watch Series 4", 2018, 3000, "1.5");
addWatchDevice("Apple", "Watch Series 5", 2019, 3500, "1.5");
addWatchDevice("Apple", "Watch Series 6", 2020, 3500, "1.5");
addWatchDevice("Apple", "Watch Series 7", 2021, 4000, "1.6");
addWatchDevice("Apple", "Watch Series 8", 2022, 4500, "1.6");
addWatchDevice("Apple", "Watch Series 9", 2023, 4500, "1.6");
addWatchDevice("Apple", "Watch Ultra", 2022, 6000, "1.9");
addWatchDevice("Apple", "Watch Ultra 2", 2023, 7000, "1.9");
addWatchDevice("Apple", "Watch SE", 2020, 2500, "1.3");
addWatchDevice("Apple", "Watch SE 2", 2022, 2500, "1.5");
addWatchDevice("Huawei", "Watch GT 4", 2023, 1500, "1.4");
addWatchDevice("Xiaomi", "Watch S3", 2023, 1000, "1.4");

// AirPods系列
addEarphoneDevice("Apple", "AirPods 1", 2019, 1200);
addEarphoneDevice("Apple", "AirPods 2", 2019, 1200);
addEarphoneDevice("Apple", "AirPods 3", 2021, 1300);
addEarphoneDevice("Apple", "AirPods 4", 2024, 1500);
addEarphoneDevice("Apple", "AirPods Pro 1", 2019, 1999);
addEarphoneDevice("Apple", "AirPods Pro 2", 2022, 1899);
addEarphoneDevice("Apple", "AirPods Max", 2020, 4399);
addEarphoneDevice("Sony", "WH-1000XM5", 2023, 2499);
addEarphoneDevice("Sony", "WF-1000XM5", 2023, 1999);
addEarphoneDevice("Samsung", "Galaxy Buds 2", 2021, 1000);
addEarphoneDevice("Samsung", "Galaxy Buds 2 Pro", 2022, 1500);
addEarphoneDevice("Huawei", "FreeBuds Pro 3", 2023, 1500);
addEarphoneDevice("Xiaomi", "Buds 4 Pro", 2023, 800);

// 三星手机系列
addPhoneDevice("Samsung", "Galaxy S", "21", 2021, 5500, "6.2", 4000, "Exynos 2100");
addPhoneDevice("Samsung", "Galaxy S", "21+", 2021, 6500, "6.7", 4800, "Exynos 2100");
addPhoneDevice("Samsung", "Galaxy S", "21 Ultra", 2021, 8000, "6.8", 5000, "Exynos 2100");
addPhoneDevice("Samsung", "Galaxy S", "22", 2022, 5000, "6.1", 3700, "Exynos 2200");
addPhoneDevice("Samsung", "Galaxy S", "22+", 2022, 6000, "6.6", 4500, "Exynos 2200");
addPhoneDevice("Samsung", "Galaxy S", "22 Ultra", 2022, 8000, "6.8", 5000, "Exynos 2200");
addPhoneDevice("Samsung", "Galaxy S", "23", 2023, 5500, "6.1", 3900, "Snapdragon 8 Gen 2");
addPhoneDevice("Samsung", "Galaxy S", "23+", 2023, 6500, "6.6", 4700, "Snapdragon 8 Gen 2");
addPhoneDevice("Samsung", "Galaxy S", "23 Ultra", 2023, 9000, "6.8", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Samsung", "Galaxy S", "24", 2024, 6000, "6.2", 4000, "Snapdragon 8 Gen 3");
addPhoneDevice("Samsung", "Galaxy S", "24+", 2024, 7000, "6.7", 4800, "Snapdragon 8 Gen 3");
addPhoneDevice("Samsung", "Galaxy S", "24 Ultra", 2024, 10000, "6.8", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Samsung", "Galaxy Z", "Fold3", 2021, 14000, "7.6", 4400, "Snapdragon 888");
addPhoneDevice("Samsung", "Galaxy Z", "Fold4", 2022, 13000, "7.6", 4400, "Snapdragon 8+ Gen 1");
addPhoneDevice("Samsung", "Galaxy Z", "Fold5", 2023, 13000, "7.6", 4400, "Snapdragon 8 Gen 2");
addPhoneDevice("Samsung", "Galaxy Z", "Flip3", 2021, 8000, "6.7", 3300, "Snapdragon 888");
addPhoneDevice("Samsung", "Galaxy Z", "Flip4", 2022, 8500, "6.7", 3700, "Snapdragon 8+ Gen 1");
addPhoneDevice("Samsung", "Galaxy Z", "Flip5", 2023, 8500, "6.7", 3700, "Snapdragon 8 Gen 2");

// 华为手机系列
addPhoneDevice("Huawei", "Mate", "40", 2020, 6000, "6.7", 4400, "麒麟9000");
addPhoneDevice("Huawei", "Mate", "40 Pro", 2020, 7000, "6.76", 4400, "麒麟9000");
addPhoneDevice("Huawei", "Mate", "50", 2022, 6000, "6.7", 4400, "Snapdragon 8+");
addPhoneDevice("Huawei", "Mate", "50 Pro", 2022, 7000, "6.74", 4500, "Snapdragon 8+");
addPhoneDevice("Huawei", "Mate", "60", 2023, 6000, "6.69", 5000, "麒麟9000S");
addPhoneDevice("Huawei", "Mate", "60 Pro", 2023, 7000, "6.82", 5000, "麒麟9000S");
addPhoneDevice("Huawei", "Mate", "60 Pro+", 2023, 9000, "6.82", 5000, "麒麟9000S");
addPhoneDevice("Huawei", "P", "50", 2021, 5000, "6.5", 4100, "Snapdragon 888");
addPhoneDevice("Huawei", "P", "50 Pro", 2021, 6000, "6.6", 4300, "Snapdragon 888");
addPhoneDevice("Huawei", "Pura", "70", 2024, 6000, "6.6", 5000, "麒麟9000S");
addPhoneDevice("Huawei", "Pura", "70 Pro", 2024, 7000, "6.8", 5000, "麒麟9000S");

// 小米手机系列
addPhoneDevice("Xiaomi", "12", "", 2021, 4000, "6.28", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("Xiaomi", "12", "Pro", 2021, 5000, "6.73", 4600, "Snapdragon 8 Gen 1");
addPhoneDevice("Xiaomi", "12S", "", 2022, 4500, "6.28", 4500, "Snapdragon 8+ Gen 1");
addPhoneDevice("Xiaomi", "12S", "Ultra", 2022, 6000, "6.73", 4800, "Snapdragon 8+ Gen 1");
addPhoneDevice("Xiaomi", "13", "", 2023, 4500, "6.36", 4500, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "13", "Pro", 2023, 6000, "6.73", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "13", "Ultra", 2023, 7000, "6.73", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "14", "", 2024, 5000, "6.36", 4600, "Snapdragon 8 Gen 3");
addPhoneDevice("Xiaomi", "14", "Pro", 2024, 6500, "6.73", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Xiaomi", "14", "Ultra", 2024, 8000, "6.73", 5300, "Snapdragon 8 Gen 3");

// 红米手机系列
addPhoneDevice("Redmi", "Note", "10", 2021, 1500, "6.43", 5000, "Snapdragon 678");
addPhoneDevice("Redmi", "Note", "10 Pro", 2021, 2000, "6.67", 5000, "Snapdragon 732G");
addPhoneDevice("Redmi", "Note", "11", 2022, 1500, "6.43", 5000, "Snapdragon 680");
addPhoneDevice("Redmi", "Note", "11 Pro", 2022, 2000, "6.67", 5000, "Dimensity 920");
addPhoneDevice("Redmi", "Note", "12", 2023, 1500, "6.67", 5000, "Snapdragon 685");
addPhoneDevice("Redmi", "Note", "12 Pro", 2023, 2000, "6.67", 5000, "Snapdragon 732G");
addPhoneDevice("Redmi", "Note", "12 Turbo", 2023, 2500, "6.67", 5000, "Snapdragon 7+ Gen 2");
addPhoneDevice("Redmi", "Note", "13", 2024, 1500, "6.67", 5000, "Snapdragon 695");
addPhoneDevice("Redmi", "Note", "13 Pro", 2024, 2000, "6.67", 5000, "Snapdragon 7s Gen 3");
addPhoneDevice("Redmi", "K", "40", 2021, 2500, "6.67", 4500, "Snapdragon 870");
addPhoneDevice("Redmi", "K", "50", 2022, 3000, "6.67", 5000, "Dimensity 8100");
addPhoneDevice("Redmi", "K", "60", 2023, 3000, "6.67", 5000, "Snapdragon 8+ Gen 1");
addPhoneDevice("Redmi", "K", "70", 2024, 3500, "6.67", 5000, "Snapdragon 8 Gen 3");

// OPPO手机系列
addPhoneDevice("OPPO", "Find X", "5", 2022, 5000, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("OPPO", "Find X", "6", 2023, 5500, "6.74", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("OPPO", "Find X", "7", 2024, 6000, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("OPPO", "Reno", "8", 2022, 2500, "6.43", 4500, "Dimensity 1300");
addPhoneDevice("OPPO", "Reno", "9", 2023, 3000, "6.7", 4500, "Snapdragon 778G");
addPhoneDevice("OPPO", "Reno", "10", 2023, 3500, "6.7", 4500, "Snapdragon 7 Gen 2");

// vivo手机系列
addPhoneDevice("vivo", "X", "80", 2022, 4000, "6.78", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("vivo", "X", "90", 2023, 4500, "6.78", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("vivo", "X", "100", 2024, 5000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("vivo", "X", "100 Pro", 2024, 6000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("vivo", "iQOO", "11", 2023, 4000, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("vivo", "iQOO", "12", 2024, 4500, "6.78", 5000, "Snapdragon 8 Gen 3");

// 一加手机系列
addPhoneDevice("OnePlus", "10", "", 2022, 4500, "6.7", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("OnePlus", "10", "Pro", 2022, 5500, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("OnePlus", "11", "", 2023, 4500, "6.7", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("OnePlus", "12", "", 2024, 5000, "6.82", 5400, "Snapdragon 8 Gen 3");
addPhoneDevice("OnePlus", "Nord", "3", 2023, 2500, "6.74", 4800, "Dimensity 9000");

// 荣耀手机系列
addPhoneDevice("Honor", "Magic", "4", 2022, 4500, "6.81", 4600, "Snapdragon 8 Gen 1");
addPhoneDevice("Honor", "Magic", "5", 2023, 5000, "6.73", 5100, "Snapdragon 8 Gen 2");
addPhoneDevice("Honor", "Magic", "6", 2024, 5500, "6.82", 5400, "Snapdragon 8 Gen 3");
addPhoneDevice("Honor", "Magic", "6 Pro", 2024, 7000, "6.82", 5400, "Snapdragon 8 Gen 3");
addPhoneDevice("Honor", "X", "50", 2023, 2000, "6.78", 5800, "Snapdragon 695");

// 索尼手机系列
addPhoneDevice("Sony", "Xperia", "1 IV", 2022, 7000, "6.5", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Sony", "Xperia", "1 V", 2023, 8000, "6.5", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Sony", "Xperia", "5 IV", 2022, 6000, "6.1", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("Sony", "Xperia", "5 V", 2023, 6500, "6.1", 4500, "Snapdragon 8 Gen 2");

// Realme手机系列
addPhoneDevice("Realme", "GT", "Neo3", 2022, 2000, "6.7", 5000, "Dimensity 8100");
addPhoneDevice("Realme", "GT", "Neo5", 2023, 2500, "6.74", 5000, "Snapdragon 8+ Gen 1");
addPhoneDevice("Realme", "GT", "5", 2023, 3000, "6.74", 5400, "Snapdragon 8 Gen 2");

// 魅族手机系列
addPhoneDevice("Meizu", "20", "", 2023, 3000, "6.55", 4500, "Snapdragon 8 Gen 2");
addPhoneDevice("Meizu", "20", "Pro", 2023, 4000, "6.81", 5000, "Snapdragon 8 Gen 2");

// 努比亚手机系列
addPhoneDevice("Nubia", "RedMagic", "8", 2023, 4000, "6.8", 5500, "Snapdragon 8 Gen 2");
addPhoneDevice("Nubia", "RedMagic", "9", 2024, 4500, "6.8", 6000, "Snapdragon 8 Gen 3");

// 黑鲨手机系列
addPhoneDevice("BlackShark", "5", "", 2022, 3000, "6.67", 4600, "Snapdragon 8 Gen 1");
addPhoneDevice("BlackShark", "5", "Pro", 2022, 4000, "6.8", 5000, "Snapdragon 8 Gen 1");

// Moto手机系列
addPhoneDevice("Motorola", "Edge", "30", 2022, 2500, "6.55", 4000, "Snapdragon 778G");
addPhoneDevice("Motorola", "Edge", "40", 2023, 3000, "6.55", 4400, "Snapdragon 7 Gen 2");

// Google手机系列
addPhoneDevice("Google", "Pixel", "7", 2022, 5000, "6.3", 4355, "Tensor G2");
addPhoneDevice("Google", "Pixel", "7 Pro", 2022, 7000, "6.7", 5000, "Tensor G2");
addPhoneDevice("Google", "Pixel", "8", 2023, 5500, "6.2", 4575, "Tensor G3");
addPhoneDevice("Google", "Pixel", "8 Pro", 2023, 8000, "6.7", 5000, "Tensor G3");

// ====== 增加更多设备 ======

// 苹果iPad全系列
addTabletDevice("Apple", "iPad", "10", 2022, 3500, "10.9", 8756, "A14");
addTabletDevice("Apple", "iPad", "9", 2021, 3000, "10.2", 8557, "A13");
addTabletDevice("Apple", "iPad", "8", 2020, 2500, "10.2", 8827, "A12");
addTabletDevice("Apple", "iPad Air", "5", 2022, 5000, "10.9", 8600, "M1");
addTabletDevice("Apple", "iPad Air", "4", 2020, 4500, "10.9", 8557, "A14");
addTabletDevice("Apple", "iPad mini", "6", 2021, 4000, "8.3", 5124, "A15");
addTabletDevice("Apple", "iPad mini", "5", 2019, 3500, "7.9", 5124, "A12");
addTabletDevice("Apple", "iPad Pro", "12.9 6", 2022, 9000, "12.9", 10700, "M2");
addTabletDevice("Apple", "iPad Pro", "12.9 5", 2021, 8500, "12.9", 10000, "M1");
addTabletDevice("Apple", "iPad Pro", "11 4", 2022, 7000, "11", 9720, "M2");
addTabletDevice("Apple", "iPad Pro", "11 3", 2021, 6500, "11", 8557, "M1");

// 三星平板全系列
addTabletDevice("Samsung", "Galaxy Tab S", "9 Ultra", 2024, 9000, "14.6", 11200, "Snapdragon 8 Gen 3");
addTabletDevice("Samsung", "Galaxy Tab S", "9+", 2024, 6000, "12.4", 10000, "Snapdragon 8 Gen 2");
addTabletDevice("Samsung", "Galaxy Tab S", "9", 2024, 5000, "11", 8000, "Snapdragon 8 Gen 2");
addTabletDevice("Samsung", "Galaxy Tab S", "8 Ultra", 2023, 8500, "14.6", 11200, "Snapdragon 8 Gen 2");
addTabletDevice("Samsung", "Galaxy Tab S", "8+", 2023, 5500, "12.4", 10000, "Snapdragon 8 Gen 2");
addTabletDevice("Samsung", "Galaxy Tab S", "8", 2023, 4500, "11", 8000, "Snapdragon 8 Gen 2");
addTabletDevice("Samsung", "Galaxy Tab A", "8.0", 2022, 1500, "8", 5100, "Unisoc T610");
addTabletDevice("Samsung", "Galaxy Tab A", "10.1", 2022, 2000, "10.1", 6150, "Unisoc T610");
addTabletDevice("Samsung", "Galaxy Tab A", "7.0", 2018, 1000, "7", 4200, "Exynos 7870");

// 华为平板全系列
addTabletDevice("Huawei", "MatePad", "Pro 13.2", 2023, 6000, "13.2", 12000, "麒麟9000S");
addTabletDevice("Huawei", "MatePad", "Pro 12.6", 2021, 5500, "12.6", 10000, "麒麟9000E");
addTabletDevice("Huawei", "MatePad", "Pro 11", 2022, 4000, "11", 8300, "Snapdragon 870");
addTabletDevice("Huawei", "MatePad", "11.5", 2023, 3000, "11.5", 8500, "麒麟8000");
addTabletDevice("Huawei", "MatePad", "11", 2021, 3500, "11", 7250, "麒麟9000E");
addTabletDevice("Huawei", "MatePad", "10.4", 2022, 2000, "10.4", 7250, "麒麟820");
addTabletDevice("Huawei", "MatePad", "SE 10.4", 2022, 1500, "10.4", 5100, "麒麟710A");
addTabletDevice("Huawei", "MatePad", "Air", 2023, 3500, "11.5", 8300, "麒麟8000");

// 小米平板全系列
addTabletDevice("Xiaomi", "Pad", "6", 2023, 3000, "11", 8850, "Snapdragon 870");
addTabletDevice("Xiaomi", "Pad", "6 Pro", 2023, 4000, "11", 8600, "Snapdragon 8+ Gen 1");
addTabletDevice("Xiaomi", "Pad", "5", 2021, 2500, "11", 8720, "Snapdragon 860");
addTabletDevice("Xiaomi", "Pad", "5 Pro", 2021, 3500, "12.4", 10000, "Snapdragon 870");
addTabletDevice("Xiaomi", "Pad", "4", 2018, 1500, "8", 6000, "Snapdragon 660");
addTabletDevice("Xiaomi", "Pad", "4 Plus", 2018, 1800, "10.1", 8620, "Snapdragon 660");

// OPPO平板系列
addTabletDevice("OPPO", "Pad", "2", 2023, 3000, "11.61", 9510, "Snapdragon 870");
addTabletDevice("OPPO", "Pad", "2 Pro", 2023, 4000, "12.1", 9510, "Snapdragon 8+ Gen 1");
addTabletDevice("OPPO", "Pad", "", 2022, 2500, "11", 7500, "Snapdragon 870");
addTabletDevice("OPPO", "Pad", "Air", 2022, 2000, "10.36", 7100, "Snapdragon 680");

// vivo平板系列
addTabletDevice("vivo", "Pad", "3", 2024, 3500, "11", 8800, "Snapdragon 870");
addTabletDevice("vivo", "Pad", "3 Pro", 2024, 4500, "12.1", 9700, "Snapdragon 8 Gen 2");
addTabletDevice("vivo", "Pad", "2", 2023, 3000, "12.1", 9050, "Snapdragon 870");
addTabletDevice("vivo", "Pad", "", 2022, 2500, "11", 7240, "Snapdragon 870");

// 苹果MacBook全系列
addLaptopDevice("Apple", "MacBook Pro", "14 2023", 2023, 15000, "14.2", "M2 Pro", "10小时");
addLaptopDevice("Apple", "MacBook Pro", "14 2021", 2021, 14000, "14.2", "M1 Pro", "17小时");
addLaptopDevice("Apple", "MacBook Pro", "16 2023", 2023, 20000, "16.2", "M2 Pro", "11小时");
addLaptopDevice("Apple", "MacBook Pro", "16 2021", 2021, 18000, "16.2", "M1 Pro", "21小时");
addLaptopDevice("Apple", "MacBook Air", "15 2023", 2023, 10000, "15.3", "M2", "18小时");
addLaptopDevice("Apple", "MacBook Air", "13 2023", 2023, 8000, "13.6", "M2", "18小时");
addLaptopDevice("Apple", "MacBook Air", "13 2020", 2020, 7000, "13.3", "M1", "18小时");
addLaptopDevice("Apple", "MacBook", "12", 2017, 6000, "12", "Intel Core m3", "10小时");

// 戴尔笔记本系列
addLaptopDevice("Dell", "XPS", "13", 2023, 9000, "13.4", "Intel i7-1360P", "12小时");
addLaptopDevice("Dell", "XPS", "15", 2023, 12000, "15.6", "Intel i7-13700H", "12小时");
addLaptopDevice("Dell", "XPS", "17", 2023, 15000, "17", "Intel i9-13900H", "10小时");
addLaptopDevice("Dell", "Inspiron", "14", 2023, 5000, "14", "Intel i5-1340P", "10小时");
addLaptopDevice("Dell", "Inspiron", "15", 2023, 5500, "15.6", "Intel i5-13500H", "10小时");
addLaptopDevice("Dell", "Alienware", "m15", 2023, 18000, "15.6", "Intel i9-13980HX", "8小时");
addLaptopDevice("Dell", "Alienware", "m17", 2023, 20000, "17.3", "Intel i9-13980HX", "7小时");

// 惠普笔记本系列
addLaptopDevice("HP", "Spectre", "x360 14", 2023, 10000, "13.5", "Intel i7-1360P", "12小时");
addLaptopDevice("HP", "Spectre", "x360 16", 2023, 13000, "16", "Intel i7-13700H", "10小时");
addLaptopDevice("HP", "Envy", "14", 2023, 7000, "14", "Intel i5-1340P", "10小时");
addLaptopDevice("HP", "Envy", "15", 2023, 8000, "15.6", "Intel i7-13700H", "10小时");
addLaptopDevice("HP", "Pavilion", "14", 2023, 4000, "14", "Intel i5-1335U", "8小时");
addLaptopDevice("HP", "Pavilion", "15", 2023, 4500, "15.6", "Intel i5-1335U", "8小时");
addLaptopDevice("HP", "OMEN", "16", 2023, 12000, "16.1", "Intel i9-13980HX", "6小时");

// 联想笔记本系列
addLaptopDevice("Lenovo", "ThinkPad X1", "Carbon", 2023, 13000, "14", "Intel i7-1360P", "15小时");
addLaptopDevice("Lenovo", "ThinkPad X1", "Yoga", 2023, 14000, "14", "Intel i7-1360P", "14小时");
addLaptopDevice("Lenovo", "ThinkPad T", "14", 2023, 8000, "14", "Intel i5-1340P", "12小时");
addLaptopDevice("Lenovo", "ThinkPad T", "15", 2023, 9000, "15.6", "Intel i7-1360P", "11小时");
addLaptopDevice("Lenovo", "IdeaPad", "5", 2023, 5000, "14", "Intel i5-1340P", "10小时");
addLaptopDevice("Lenovo", "IdeaPad", "5 Pro", 2023, 6000, "14", "Intel i7-1360P", "10小时");
addLaptopDevice("Lenovo", "Legion", "5", 2023, 9000, "15.6", "Intel i7-13700H", "8小时");
addLaptopDevice("Lenovo", "Legion", "7", 2023, 15000, "16", "Intel i9-13980HX", "7小时");

// 华硕笔记本系列
addLaptopDevice("ASUS", "ROG Zephyrus", "G14", 2023, 12000, "14", "AMD Ryzen 9 7940HS", "10小时");
addLaptopDevice("ASUS", "ROG Zephyrus", "G15", 2023, 14000, "15.6", "AMD Ryzen 9 7945HX", "9小时");
addLaptopDevice("ASUS", "ROG Strix", "G15", 2023, 10000, "15.6", "Intel i7-13700H", "7小时");
addLaptopDevice("ASUS", "ZenBook", "14", 2023, 7000, "14", "Intel i5-1340P", "12小时");
addLaptopDevice("ASUS", "ZenBook", "14 OLED", 2023, 8000, "14", "Intel i7-1360P", "12小时");
addLaptopDevice("ASUS", "VivoBook", "14", 2023, 4000, "14", "Intel i5-1335U", "8小时");
addLaptopDevice("ASUS", "VivoBook", "15", 2023, 4500, "15.6", "Intel i5-1335U", "8小时");

// 苹果Apple Watch全系列
addWatchDevice("Apple", "Watch", "Ultra 2", 2023, 6000, "49", "S9");
addWatchDevice("Apple", "Watch", "Ultra", 2022, 5500, "49", "S8");
addWatchDevice("Apple", "Watch", "Series 9", 2023, 3000, "45", "S9");
addWatchDevice("Apple", "Watch", "Series 9", 2023, 2800, "41", "S9");
addWatchDevice("Apple", "Watch", "Series 8", 2022, 2500, "45", "S8");
addWatchDevice("Apple", "Watch", "Series 8", 2022, 2300, "41", "S8");
addWatchDevice("Apple", "Watch", "Series 7", 2021, 2000, "45", "S7");
addWatchDevice("Apple", "Watch", "Series 7", 2021, 1800, "41", "S7");
addWatchDevice("Apple", "Watch", "Series 6", 2020, 1500, "44", "S6");
addWatchDevice("Apple", "Watch", "Series 6", 2020, 1300, "40", "S6");
addWatchDevice("Apple", "Watch", "SE 2", 2022, 1500, "44", "S8");
addWatchDevice("Apple", "Watch", "SE 2", 2022, 1300, "40", "S8");
addWatchDevice("Apple", "Watch", "SE", 2020, 1000, "44", "S5");
addWatchDevice("Apple", "Watch", "SE", 2020, 900, "40", "S5");

// 三星智能手表系列
addWatchDevice("Samsung", "Galaxy Watch", "6 Classic", 2023, 3000, "47", "Exynos W930");
addWatchDevice("Samsung", "Galaxy Watch", "6 Classic", 2023, 2800, "43", "Exynos W930");
addWatchDevice("Samsung", "Galaxy Watch", "6", 2023, 2000, "44", "Exynos W930");
addWatchDevice("Samsung", "Galaxy Watch", "6", 2023, 1800, "40", "Exynos W930");
addWatchDevice("Samsung", "Galaxy Watch", "5 Pro", 2022, 2500, "45", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "5", 2022, 1800, "44", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "5", 2022, 1600, "40", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "4 Classic", 2021, 2000, "46", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "4 Classic", 2021, 1800, "42", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "4", 2021, 1500, "44", "Exynos W920");
addWatchDevice("Samsung", "Galaxy Watch", "4", 2021, 1300, "40", "Exynos W920");

// 华为智能手表系列
addWatchDevice("Huawei", "Watch", "4 Pro", 2023, 3000, "48", "麒麟A2");
addWatchDevice("Huawei", "Watch", "4", 2023, 2500, "46", "麒麟A2");
addWatchDevice("Huawei", "Watch", "3 Pro", 2021, 2000, "48", "麒麟A1");
addWatchDevice("Huawei", "Watch", "3", 2021, 1800, "46", "麒麟A1");
addWatchDevice("Huawei", "Watch", "GT 3 Pro", 2022, 2000, "46", "麒麟A1");
addWatchDevice("Huawei", "Watch", "GT 3", 2021, 1500, "46", "麒麟A1");
addWatchDevice("Huawei", "Watch", "GT 3", 2021, 1300, "42", "麒麟A1");
addWatchDevice("Huawei", "Watch", "GT Runner", 2022, 1800, "46", "麒麟A1");

// 小米智能手表系列
addWatchDevice("Xiaomi", "Watch", "S3", 2023, 1500, "46", "Snapdragon W5+");
addWatchDevice("Xiaomi", "Watch", "S3", 2023, 1300, "42", "Snapdragon W5+");
addWatchDevice("Xiaomi", "Watch", "S2", 2022, 1000, "46", "Snapdragon W5");
addWatchDevice("Xiaomi", "Watch", "S2", 2022, 900, "42", "Snapdragon W5");
addWatchDevice("Xiaomi", "Watch", "S1", 2021, 800, "46", "Amazfit Zepp E");
addWatchDevice("Xiaomi", "Watch", "S1 Pro", 2022, 1200, "46", "Snapdragon W5");
addWatchDevice("Xiaomi", "Watch", "Color 2", 2021, 700, "46", "Amazfit GTS 3");

// 苹果AirPods全系列
addEarphoneDevice("Apple", "AirPods Pro", 2022, 1800);
addEarphoneDevice("Apple", "AirPods Pro", 2019, 1500);
addEarphoneDevice("Apple", "AirPods", "3", 2021, 1200);
addEarphoneDevice("Apple", "AirPods", "2", 2019, 1000);
addEarphoneDevice("Apple", "AirPods", "", 2016, 800);
addEarphoneDevice("Apple", "AirPods Max", "", 2020, 4500);

// 索尼耳机系列
addEarphoneDevice("Sony", "WH-1000XM5", "", 2022, 3000);
addEarphoneDevice("Sony", "WH-1000XM4", "", 2020, 2500);
addEarphoneDevice("Sony", "WH-1000XM3", "", 2018, 2000);
addEarphoneDevice("Sony", "WF-1000XM5", "", 2022, 2500);
addEarphoneDevice("Sony", "WF-1000XM4", "", 2021, 2000);
addEarphoneDevice("Sony", "WF-1000XM3", "", 2019, 1500);
addEarphoneDevice("Sony", "LinkBuds S", "", 2021, 1000);
addEarphoneDevice("Sony", "WF-C500", "", 2021, 600);

// 三星耳机系列
addEarphoneDevice("Samsung", "Galaxy Buds2 Pro", "", 2022, 1500);
addEarphoneDevice("Samsung", "Galaxy Buds2", "", 2021, 1000);
addEarphoneDevice("Samsung", "Galaxy Buds Pro", "", 2021, 1200);
addEarphoneDevice("Samsung", "Galaxy Buds Live", "", 2020, 800);
addEarphoneDevice("Samsung", "Galaxy Buds+", "", 2020, 600);
addEarphoneDevice("Samsung", "Galaxy Buds", "", 2019, 500);
addEarphoneDevice("Samsung", "Galaxy Buds FE", "", 2023, 800);

// 华为耳机系列
addEarphoneDevice("Huawei", "FreeBuds Pro", "2", 2022, 1200);
addEarphoneDevice("Huawei", "FreeBuds Pro", "", 2020, 1000);
addEarphoneDevice("Huawei", "FreeBuds", "5", 2023, 800);
addEarphoneDevice("Huawei", "FreeBuds", "4", 2021, 700);
addEarphoneDevice("Huawei", "FreeBuds", "3", 2019, 600);
addEarphoneDevice("Huawei", "FreeBuds", "SE", 2021, 300);
addEarphoneDevice("Huawei", "FreeBuds", "SE 2", 2022, 400);

// 小米耳机系列
addEarphoneDevice("Xiaomi", "Buds", "4 Pro", 2022, 1000);
addEarphoneDevice("Xiaomi", "Buds", "4", 2022, 600);
addEarphoneDevice("Xiaomi", "Buds", "3 Pro", 2021, 800);
addEarphoneDevice("Xiaomi", "Buds", "3", 2021, 500);
addEarphoneDevice("Xiaomi", "Buds", "2 Pro", 2020, 600);
addEarphoneDevice("Xiaomi", "Buds", "2", 2020, 400);
addEarphoneDevice("Xiaomi", "Air", "2 Pro", 2020, 500);
addEarphoneDevice("Xiaomi", "Air", "2", 2019, 400);

// 更多手机型号 - iPhone旧款
addPhoneDevice("Apple", "iPhone", "7", 2016, 2000, "4.7", 1960, "A10");
addPhoneDevice("Apple", "iPhone", "7 Plus", 2016, 2500, "5.5", 2900, "A10");
addPhoneDevice("Apple", "iPhone", "6s", 2015, 1500, "4.7", 1715, "A9");
addPhoneDevice("Apple", "iPhone", "6s Plus", 2015, 1800, "5.5", 2750, "A9");
addPhoneDevice("Apple", "iPhone", "6", 2014, 1200, "4.7", 1810, "A8");
addPhoneDevice("Apple", "iPhone", "6 Plus", 2014, 1500, "5.5", 2915, "A8");
addPhoneDevice("Apple", "iPhone", "5s", 2013, 800, "4", 1560, "A7");
addPhoneDevice("Apple", "iPhone", "5", 2012, 600, "4", 1440, "A6");
addPhoneDevice("Apple", "iPhone", "4s", 2011, 500, "3.5", 1432, "A5");
addPhoneDevice("Apple", "iPhone", "4", 2010, 400, "3.5", 1420, "A4");

// 更多手机型号 - 三星旧款
addPhoneDevice("Samsung", "Galaxy S", "20", 2020, 5000, "6.2", 4000, "Exynos 990");
addPhoneDevice("Samsung", "Galaxy S", "20+", 2020, 6000, "6.7", 4500, "Exynos 990");
addPhoneDevice("Samsung", "Galaxy S", "20 Ultra", 2020, 8000, "6.9", 5000, "Exynos 990");
addPhoneDevice("Samsung", "Galaxy S", "10", 2019, 4000, "6.1", 3400, "Exynos 9820");
addPhoneDevice("Samsung", "Galaxy S", "10+", 2019, 5000, "6.4", 4100, "Exynos 9820");
addPhoneDevice("Samsung", "Galaxy S", "10e", 2019, 3500, "5.8", 3100, "Exynos 9820");
addPhoneDevice("Samsung", "Galaxy S", "9", 2018, 3000, "5.8", 3000, "Exynos 9810");
addPhoneDevice("Samsung", "Galaxy S", "9+", 2018, 3500, "6.2", 3500, "Exynos 9810");
addPhoneDevice("Samsung", "Galaxy S", "8", 2017, 2500, "5.8", 3000, "Exynos 8895");
addPhoneDevice("Samsung", "Galaxy S", "8+", 2017, 3000, "6.2", 3500, "Exynos 8895");

// 更多手机型号 - 华为旧款
addPhoneDevice("Huawei", "Mate", "30", 2019, 5000, "6.62", 4200, "麒麟990");
addPhoneDevice("Huawei", "Mate", "30 Pro", 2019, 6000, "6.53", 4500, "麒麟990");
addPhoneDevice("Huawei", "Mate", "20", 2018, 4000, "6.53", 4200, "麒麟980");
addPhoneDevice("Huawei", "Mate", "20 Pro", 2018, 5000, "6.39", 4200, "麒麟980");
addPhoneDevice("Huawei", "Mate", "20 X", 2018, 4500, "7.2", 5000, "麒麟980");
addPhoneDevice("Huawei", "P", "40", 2020, 4500, "6.1", 3800, "麒麟990");
addPhoneDevice("Huawei", "P", "40 Pro", 2020, 6000, "6.58", 4200, "麒麟990");
addPhoneDevice("Huawei", "P", "30", 2019, 4000, "6.1", 3650, "麒麟980");
addPhoneDevice("Huawei", "P", "30 Pro", 2019, 5000, "6.47", 4200, "麒麟980");
addPhoneDevice("Huawei", "P", "20", 2018, 3000, "5.8", 3400, "麒麟970");
addPhoneDevice("Huawei", "P", "20 Pro", 2018, 4000, "6.1", 4000, "麒麟970");

// 更多手机型号 - 小米数字系列
addPhoneDevice("Xiaomi", "13", "", 2023, 4500, "6.36", 4500, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "13", "Pro", 2023, 6000, "6.73", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "13", "Ultra", 2023, 7000, "6.73", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Xiaomi", "12", "", 2021, 4000, "6.28", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("Xiaomi", "12", "Pro", 2021, 5000, "6.73", 4600, "Snapdragon 8 Gen 1");
addPhoneDevice("Xiaomi", "12", "Ultra", 2022, 6000, "6.73", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Xiaomi", "11", "", 2020, 4000, "6.81", 4600, "Snapdragon 888");
addPhoneDevice("Xiaomi", "11", "Pro", 2021, 5000, "6.81", 5000, "Snapdragon 888");
addPhoneDevice("Xiaomi", "11", "Ultra", 2021, 6000, "6.81", 5000, "Snapdragon 888");
addPhoneDevice("Xiaomi", "10", "", 2020, 3500, "6.67", 4780, "Snapdragon 865");
addPhoneDevice("Xiaomi", "10", "Pro", 2020, 4500, "6.67", 5000, "Snapdragon 865");
addPhoneDevice("Xiaomi", "10", "Ultra", 2020, 5000, "6.67", 5000, "Snapdragon 865");

// 更多手机型号 - 红米系列
addPhoneDevice("Redmi", "Note", "13", 2023, 1500, "6.67", 5000, "Snapdragon 6 Gen 1");
addPhoneDevice("Redmi", "Note", "13 Pro", 2023, 2000, "6.67", 5000, "Snapdragon 7s Gen 2");
addPhoneDevice("Redmi", "Note", "13 Pro+", 2023, 2500, "6.67", 5000, "Snapdragon 7 Gen 2");
addPhoneDevice("Redmi", "Note", "12", 2023, 1200, "6.67", 5000, "Snapdragon 4 Gen 2");
addPhoneDevice("Redmi", "Note", "12 Pro", 2023, 1500, "6.67", 5000, "Snapdragon 7 Gen 2");
addPhoneDevice("Redmi", "Note", "12 Pro+", 2023, 2000, "6.67", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Redmi", "Note", "11", 2021, 1000, "6.43", 5000, "MediaTek Helio G96");
addPhoneDevice("Redmi", "Note", "11 Pro", 2021, 1500, "6.67", 5000, "MediaTek Dimensity 920");
addPhoneDevice("Redmi", "Note", "11 Pro+", 2021, 1800, "6.67", 5000, "MediaTek Dimensity 920");
addPhoneDevice("Redmi", "Note", "10", 2021, 900, "6.43", 5000, "MediaTek Helio G88");
addPhoneDevice("Redmi", "Note", "10 Pro", 2021, 1200, "6.67", 5000, "MediaTek Dimensity 1100");
addPhoneDevice("Redmi", "K", "70", 2023, 3000, "6.67", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Redmi", "K", "70 Pro", 2023, 4000, "6.67", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Redmi", "K", "60", 2023, 2500, "6.67", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Redmi", "K", "60 Pro", 2023, 3500, "6.67", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Redmi", "K", "50", 2022, 2000, "6.67", 5000, "MediaTek Dimensity 8100");
addPhoneDevice("Redmi", "K", "50 Pro", 2022, 2500, "6.67", 5000, "MediaTek Dimensity 9000");

// 更多手机型号 - OPPO Find系列
addPhoneDevice("OPPO", "Find X", "7", 2024, 5000, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("OPPO", "Find X", "7 Ultra", 2024, 7000, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("OPPO", "Find X", "6", 2023, 4000, "6.74", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("OPPO", "Find X", "6 Pro", 2023, 5500, "6.82", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("OPPO", "Find X", "5", 2022, 3500, "6.55", 4800, "Snapdragon 888");
addPhoneDevice("OPPO", "Find X", "5 Pro", 2022, 5000, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("OPPO", "Find X", "3", 2021, 3500, "6.7", 4500, "Snapdragon 888");
addPhoneDevice("OPPO", "Find X", "3 Pro", 2021, 5000, "6.7", 5000, "Snapdragon 888");

// 更多手机型号 - OPPO Reno系列
addPhoneDevice("OPPO", "Reno", "11", 2023, 3000, "6.7", 4800, "Snapdragon 8+ Gen 1");
addPhoneDevice("OPPO", "Reno", "11 Pro", 2023, 4000, "6.7", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("OPPO", "Reno", "10", 2023, 2500, "6.7", 4600, "Snapdragon 778G");
addPhoneDevice("OPPO", "Reno", "10 Pro", 2023, 3500, "6.7", 4600, "Snapdragon 8+ Gen 1");
addPhoneDevice("OPPO", "Reno", "10 Pro+", 2023, 4000, "6.74", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("OPPO", "Reno", "9", 2022, 2500, "6.7", 4500, "Snapdragon 778G");
addPhoneDevice("OPPO", "Reno", "9 Pro", 2022, 3500, "6.7", 4500, "Snapdragon 8+ Gen 1");
addPhoneDevice("OPPO", "Reno", "9 Pro+", 2022, 4000, "6.74", 4700, "Snapdragon 8+ Gen 1");

// 更多手机型号 - vivo X系列
addPhoneDevice("vivo", "X", "100", 2023, 4500, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("vivo", "X", "100 Pro", 2023, 6000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("vivo", "X", "100 Pro+", 2023, 7000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("vivo", "X", "90", 2022, 4000, "6.78", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("vivo", "X", "90 Pro", 2022, 5000, "6.78", 4800, "Snapdragon 8 Gen 2");
addPhoneDevice("vivo", "X", "90 Pro+", 2022, 6000, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("vivo", "X", "80", 2022, 3500, "6.78", 4500, "MediaTek Dimensity 9000");
addPhoneDevice("vivo", "X", "80 Pro", 2022, 4500, "6.78", 4800, "MediaTek Dimensity 9000");
addPhoneDevice("vivo", "X", "70", 2021, 3500, "6.56", 4400, "MediaTek Dimensity 1200");
addPhoneDevice("vivo", "X", "70 Pro", 2021, 4500, "6.56", 4500, "MediaTek Dimensity 1200");
addPhoneDevice("vivo", "X", "70 Pro+", 2021, 5500, "6.78", 4800, "Snapdragon 888");

// 更多手机型号 - iQOO系列
addPhoneDevice("iQOO", "12", "", 2023, 4000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("iQOO", "12", "Pro", 2023, 5000, "6.78", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("iQOO", "11", "", 2022, 3500, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("iQOO", "11", "Pro", 2022, 4500, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("iQOO", "10", "", 2022, 3000, "6.78", 4700, "Snapdragon 8+ Gen 1");
addPhoneDevice("iQOO", "10", "Pro", 2022, 4000, "6.78", 4900, "Snapdragon 8+ Gen 1");
addPhoneDevice("iQOO", "9", "", 2022, 3000, "6.78", 4350, "Snapdragon 8 Gen 1");
addPhoneDevice("iQOO", "9", "Pro", 2022, 4000, "6.78", 4700, "Snapdragon 8 Gen 1");
addPhoneDevice("iQOO", "Neo", "8", 2023, 2000, "6.78", 5000, "Snapdragon 8+ Gen 1");
addPhoneDevice("iQOO", "Neo", "8 Pro", 2023, 2500, "6.78", 5000, "MediaTek Dimensity 9200+");
addPhoneDevice("iQOO", "Neo", "7", 2022, 2000, "6.78", 5000, "MediaTek Dimensity 9000+");

// 更多手机型号 - 一加系列
addPhoneDevice("OnePlus", "12", "", 2023, 4500, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("OnePlus", "12", "R", 2024, 3500, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("OnePlus", "11", "", 2023, 4000, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("OnePlus", "11", "R", 2023, 3000, "6.74", 5000, "Snapdragon 8+ Gen 1");
addPhoneDevice("OnePlus", "10", "", 2022, 3500, "6.7", 4800, "Snapdragon 8 Gen 1");
addPhoneDevice("OnePlus", "10", "Pro", 2022, 4500, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("OnePlus", "9", "", 2021, 3000, "6.55", 4500, "Snapdragon 888");
addPhoneDevice("OnePlus", "9", "Pro", 2021, 4000, "6.7", 4800, "Snapdragon 888");
addPhoneDevice("OnePlus", "8", "", 2020, 2500, "6.55", 4300, "Snapdragon 865");
addPhoneDevice("OnePlus", "8", "Pro", 2020, 3500, "6.78", 4500, "Snapdragon 865");

// 更多手机型号 - 荣耀系列
addPhoneDevice("Honor", "Magic", "6", 2024, 4000, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Honor", "Magic", "6 Pro", 2024, 5500, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Honor", "Magic", "5", 2023, 3500, "6.73", 5100, "Snapdragon 8 Gen 2");
addPhoneDevice("Honor", "Magic", "5 Pro", 2023, 5000, "6.81", 5450, "Snapdragon 8 Gen 2");
addPhoneDevice("Honor", "Magic", "4", 2022, 3500, "6.81", 4800, "Snapdragon 8 Gen 1");
addPhoneDevice("Honor", "Magic", "4 Pro", 2022, 5000, "6.81", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Honor", "X", "50", 2023, 1500, "6.78", 5800, "Snapdragon 6 Gen 1");
addPhoneDevice("Honor", "X", "50 Pro", 2023, 2000, "6.78", 5800, "Snapdragon 7 Gen 1");
addPhoneDevice("Honor", "X", "40", 2023, 1300, "6.67", 5000, "Snapdragon 695");
addPhoneDevice("Honor", "X", "40 GT", 2023, 1800, "6.81", 5000, "Snapdragon 888");

// 更多手机型号 - 索尼系列
addPhoneDevice("Sony", "Xperia", "1 V", 2023, 8000, "6.5", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Sony", "Xperia", "1 IV", 2022, 7000, "6.5", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Sony", "Xperia", "1 III", 2021, 6000, "6.5", 4500, "Snapdragon 888");
addPhoneDevice("Sony", "Xperia", "5 V", 2023, 6000, "6.1", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Sony", "Xperia", "5 IV", 2022, 5000, "6.1", 4500, "Snapdragon 8 Gen 1");
addPhoneDevice("Sony", "Xperia", "5 III", 2021, 4500, "6.1", 4500, "Snapdragon 888");
addPhoneDevice("Sony", "Xperia", "10 V", 2023, 3000, "6.1", 5000, "Snapdragon 695");
addPhoneDevice("Sony", "Xperia", "10 IV", 2022, 2500, "6.0", 5000, "Snapdragon 690");

// 更多手机型号 - Realme系列
addPhoneDevice("Realme", "GT", "5", 2023, 2500, "6.74", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Realme", "GT", "5 Pro", 2023, 3500, "6.78", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Realme", "GT", "Neo5", 2023, 2000, "6.74", 5000, "Snapdragon 8+ Gen 1");
addPhoneDevice("Realme", "GT", "Neo5 SE", 2023, 1500, "6.74", 5500, "Snapdragon 7+ Gen 2");
addPhoneDevice("Realme", "GT", "Neo3", 2022, 1800, "6.7", 5000, "MediaTek Dimensity 8100");
addPhoneDevice("Realme", "GT", "2 Pro", 2022, 2500, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Realme", "GT", "2", 2022, 2000, "6.62", 5000, "MediaTek Dimensity 8100");
addPhoneDevice("Realme", "Q", "5 Pro", 2022, 1500, "6.62", 5000, "Snapdragon 870");

// 更多手机型号 - 魅族系列
addPhoneDevice("Meizu", "21", "", 2024, 3500, "6.55", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Meizu", "21", "Pro", 2024, 4500, "6.82", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Meizu", "20", "", 2023, 3000, "6.55", 4700, "Snapdragon 8 Gen 2");
addPhoneDevice("Meizu", "20", "Pro", 2023, 4000, "6.82", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Meizu", "18", "", 2021, 3000, "6.2", 4000, "Snapdragon 888");
addPhoneDevice("Meizu", "18", "Pro", 2021, 4000, "6.7", 4500, "Snapdragon 888");
addPhoneDevice("Meizu", "17", "", 2020, 2500, "6.6", 4500, "Snapdragon 865");
addPhoneDevice("Meizu", "17", "Pro", 2020, 3000, "6.6", 4500, "Snapdragon 865");

// 更多手机型号 - 努比亚系列
addPhoneDevice("Nubia", "Z", "50 Ultra", 2023, 4000, "6.8", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Nubia", "Z", "50", 2022, 3000, "6.67", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Nubia", "Z", "40 Pro", 2022, 3000, "6.67", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Nubia", "Z", "40 Ultra", 2022, 4000, "6.8", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Nubia", "RedMagic", "9 Pro", 2024, 4000, "6.8", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Nubia", "RedMagic", "8 Pro", 2023, 3500, "6.8", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Nubia", "RedMagic", "7 Pro", 2022, 3500, "6.8", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Nubia", "RedMagic", "6 Pro", 2021, 3500, "6.8", 5000, "Snapdragon 888");

// 更多手机型号 - 黑鲨系列
addPhoneDevice("BlackShark", "5", "", 2022, 3000, "6.67", 4650, "Snapdragon 8 Gen 1");
addPhoneDevice("BlackShark", "5", "Pro", 2022, 4000, "6.67", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("BlackShark", "5", "RS", 2022, 3500, "6.67", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("BlackShark", "4", "", 2021, 2500, "6.67", 4500, "Snapdragon 888");
addPhoneDevice("BlackShark", "4", "Pro", 2021, 3000, "6.67", 4500, "Snapdragon 888");
addPhoneDevice("BlackShark", "4", "S", 2021, 2500, "6.67", 4500, "Snapdragon 870");

// 更多手机型号 - Moto系列
addPhoneDevice("Motorola", "Edge", "50 Ultra", 2024, 4000, "6.7", 5000, "Snapdragon 8 Gen 3");
addPhoneDevice("Motorola", "Edge", "50 Pro", 2024, 3000, "6.7", 5000, "Snapdragon 8 Gen 2");
addPhoneDevice("Motorola", "Edge", "40", 2023, 2500, "6.55", 4400, "Snapdragon 7 Gen 2");
addPhoneDevice("Motorola", "Edge", "40 Pro", 2023, 3500, "6.6", 4600, "Snapdragon 8 Gen 2");
addPhoneDevice("Motorola", "Edge", "30", 2022, 2000, "6.55", 4020, "Snapdragon 778G");
addPhoneDevice("Motorola", "Edge", "30 Pro", 2022, 3000, "6.7", 5000, "Snapdragon 8 Gen 1");
addPhoneDevice("Motorola", "Razr", "40", 2023, 4000, "6.9", 3000, "Snapdragon 7 Gen 1");
addPhoneDevice("Motorola", "Razr", "40 Ultra", 2023, 6000, "6.9", 3500, "Snapdragon 8+ Gen 1");

// 更多手机型号 - Google Pixel旧款
addPhoneDevice("Google", "Pixel", "6", 2021, 4500, "6.4", 4614, "Tensor");
addPhoneDevice("Google", "Pixel", "6 Pro", 2021, 6000, "6.7", 5000, "Tensor");
addPhoneDevice("Google", "Pixel", "5", 2020, 4000, "6.0", 4080, "Snapdragon 765G");
addPhoneDevice("Google", "Pixel", "4", 2019, 4000, "5.7", 2800, "Snapdragon 855");
addPhoneDevice("Google", "Pixel", "4 XL", 2019, 5000, "6.3", 3700, "Snapdragon 855");
addPhoneDevice("Google", "Pixel", "3", 2018, 3500, "5.5", 2915, "Snapdragon 845");
addPhoneDevice("Google", "Pixel", "3 XL", 2018, 4500, "6.3", 3430, "Snapdragon 845");
addPhoneDevice("Google", "Pixel", "2", 2017, 3000, "5.0", 2700, "Snapdragon 835");
addPhoneDevice("Google", "Pixel", "2 XL", 2017, 4000, "6.0", 3520, "Snapdragon 835");

// ====== 设备生成完成 ======

const categories = [
  { id: 1, name: "手机组装与维修", icon: "📱", color: "#3b82f6" },
  { id: 2, name: "无人机", icon: "🚁", color: "#8b5cf6" },
  { id: 3, name: "音频设备", icon: "🔊", color: "#f59e0b" },
  { id: 4, name: "游戏设备", icon: "🎮", color: "#ef4444" },
  { id: 5, name: "智能穿戴", icon: "⌚", color: "#06b6d4" },
  { id: 6, name: "VR/AR设备", icon: "🥽", color: "#ec4899" },
  { id: 7, name: "监控安防", icon: "📹", color: "#10b981" },
  { id: 8, name: "创客电子开发板", icon: "🧠", color: "#6366f1" },
  { id: 9, name: "传感器与模块", icon: "🌡️", color: "#14b8a6" },
  { id: 10, name: "显示与交互", icon: "🖥️", color: "#f97316" },
  { id: 11, name: "通信与物联网", icon: "📡", color: "#84cc16" },
  { id: 12, name: "电机与驱动", icon: "⚙️", color: "#64748b" },
  { id: 13, name: "电源与能量", icon: "🔋", color: "#22c55e" },
  { id: 14, name: "电脑改装", icon: "💻", color: "#0ea5e9" },
  { id: 15, name: "3D打印与CNC", icon: "🖨️", color: "#d946ef" },
  { id: 16, name: "车载电子", icon: "🚗", color: "#0284c7" },
  { id: 17, name: "智能家居", icon: "🏠", color: "#65a30d" },
  { id: 18, name: "电子乐器与投影", icon: "🎹", color: "#dc2626" },
  { id: 19, name: "摄影摄像与工业", icon: "📷", color: "#a855f7" },
  { id: 20, name: "医疗与教育机器人", icon: "🤖", color: "#ca8a04" },
  { id: 21, name: "Apple全系列", icon: "🍎", color: "#3b82f6" }
];
const pinyinMap = {
  "手机": ["shouji", "sj", "phone", "mobile", "智能机", "移动电话"],
  "苹果": ["pingguo", "pg", "apple", "iphone", "ip", "苹果手机"],
  "华为": ["huawei", "hw", "mate", "p系列", "hua", "wei"],
  "三星": ["sanxing", "sx", "samsung", "galaxy", "sam", "sung"],
  "小米": ["xiaomi", "xm", "mi", "redmi", "红米", "小米手机"],
  OPPO: ["oppo", "find", "reno", "k系列", "欧珀"],
  vivo: ["vivo", "x系列", "iqoo", "s系列", "维沃"],
  "一加": ["yijia", "yj", "oneplus", "op", "nord", "1+", "1jia"],
  "荣耀": ["rongyao", "ry", "honor", "magic", "荣耀手机"],
  Realme: ["realme", "rm", "真我", "q系列", "gt系列"],
  "无人机": ["wurenji", "wrj", "drone", "uav", "飞行器", "大疆", "dj", "dji", "航拍"],
  "音频": ["yinpin", "yp", "audio", "sound", "声音"],
  "蓝牙": ["lanya", "ly", "bluetooth", "bt", "无线"],
  "游戏": ["youxi", "yx", "game", "gaming", "游戏机", "游戏设备", "switch", "ps5", "xbox"],
  "手表": ["shoubiao", "sb", "watch", "wear", "智能手表", "手环", "band", "iwatch", "applewatch"],
  "平板": ["pingban", "pb", "tablet", "ipad", "平板电脑", "pad"],
  "电脑": ["diannao", "dn", "computer", "pc", "laptop", "笔记本", "台式机", "mac", "macbook"],
  "耳机": ["erji", "ej", "earphone", "headphone", "buds", "无线耳机", "蓝牙耳机", "头戴"],
  "传感器": ["chuanganqi", "cgq", "sensor", "感应器", "检测"],
  "开发板": ["kaifaban", "kfb", "devboard", "arduino", "esp", "pi", "单片机", "mcu", "stm32", "esp32", "树莓派", "raspberry"],
  "键盘": ["jianpan", "jp", "keyboard", "kb", "机械键盘", "输入"],
  "电源": ["dianyuan", "dy", "power", "psu", "供电", "电源适配器"],
  "电机": ["dianji", "dj", "motor", "马达", "驱动"],
  "音箱": ["yinxiang", "yx", "speaker", "音响", "喇叭", "智能音箱"],
  "屏幕": ["pingmu", "pm", "screen", "display", "oled", "lcd", "显示器", "显示屏"],
  "机器人": ["jiqiren", "jqr", "robot", "智能机器人", "机械臂"],
  "打印机": ["dayinji", "dyj", "printer", "3d", "3d打印", "打印设备"],
  "车载": ["chezai", "cz", "car", "auto", "汽车电子", "车载设备"],
  "家居": ["jiaju", "jj", "home", "smart", "智能家居", "智能设备"],
  "医疗": ["yiliao", "yl", "medical", "health", "健康", "医疗设备"],
  "模块": ["mokuai", "mk", "module", "组件", "配件"],
  "遥控": ["yaokong", "yk", "remote", "rf", "遥控器", "控制"],
  "照明": ["zhaoming", "zm", "light", "led", "灯光", "灯具", "灯带"],
  "充电": ["chongdian", "cd", "charge", "charging", "充电器", "充电宝", "电池"],
  "维修": ["weixiu", "wx", "repair", "fix", "修理", "维护", "拆解"],
  "组装": ["zuzhuang", "zz", "assembly", "assemble", "安装", "拼装"],
  "改装": ["gaizhuang", "gz", "modify", "modification", "改造", "升级"],
  "零件": ["lingjian", "lj", "parts", "component", "配件", "部件"],
  "教程": ["jiaocheng", "jc", "tutorial", "guide", "指南", "步骤"],
  "显示器": ["xianshiqi", "xsq", "monitor", "屏幕", "monitor"],
  "摄像头": ["shexiangtou", "sxt", "camera", "webcam", "摄影", "摄像"],
  "麦克风": ["maikefeng", "mkf", "microphone", "mic", "话筒", "录音"],
  "鼠标": ["shubiao", "sb", "mouse", "触控板", "trackpad"],
  "路由器": ["luyouqi", "lyq", "router", "网络", "wifi"],
  "硬盘": ["yingpan", "yp", "hdd", "ssd", "存储", "内存"],
  "内存": ["neicun", "nc", "ram", "memory", "内存条"],
  "显卡": ["xianka", "xk", "gpu", "graphics", "图形卡"],
  "处理器": ["chuliqi", "clq", "cpu", "processor", "芯片"],
  "散热": ["sanre", "sr", "cooling", "fan", "风扇", "散热器"],
  "机箱": ["jixiang", "jx", "case", "外壳", "壳子"],
  "投影仪": ["touyingyi", "tyy", "projector", "投影", "投射"],
  "音响": ["yinxiang", "yx", "audio", "sound system", "音响系统"],
  "VR": ["vr", "虚拟现实", "virtual reality", "vr眼镜", "头显"],
  "AR": ["ar", "增强现实", "augmented reality", "ar眼镜"],
  "智能": ["zhineng", "zn", "smart", "intelligence", "智慧"],
  "无线": ["wuxian", "wx", "wireless", "wifi", "蓝牙"],
  "有线": ["youxian", "yx", "wire", "cable", "连接线"],
  "接口": ["jiekou", "jk", "interface", "port", "usb", "type-c"],
  "电池": ["dianchi", "dc", "battery", "电芯", "蓄电池"],
  "扬声器": ["yangshengqi", "ysq", "loudspeaker", "喇叭"],
  "触摸屏": ["chumoping", "cmp", "touchscreen", "触摸", "触控"],
  "GPS": ["gps", "定位", "导航", "navigation", "location"],
  "雷达": ["leida", "ld", "radar", "探测", "传感器"],
  "马达": ["mada", "md", "motor", "engine", "驱动器"],
  "开关": ["kaiguan", "kg", "switch", "button", "按键"],
  "插头": ["chatou", "ct", "plug", "connector", "接口"],
  "线路": ["xianlu", "xl", "circuit", "线路板", "pcb"],
  "电路": ["dianlu", "dl", "circuit", "电子电路", "电路板"],
  "芯片": ["xinbian", "xb", "chip", "ic", "集成电路"],
  airpods: ["airpods", "airpod", "耳机", "苹果耳机", "无线耳机", "ap"],
  iwatch: ["iwatch", "applewatch", "watch", "手表", "智能手表", "aw"],
  ipad: ["ipad", "平板", "苹果平板", "平板电脑", "ip"],
  mac: ["mac", "macbook", "imac", "苹果电脑", "macmini", "macbookpro", "macbookair"],
  homepod: ["homepod", "智能音箱", "苹果音箱", "音箱", "hp"],
  galaxy: ["galaxy", "三星", "samsung", "盖乐世"],
  note: ["note", "三星note", "note系列"],
  fold: ["fold", "折叠屏", "折叠手机", "flip", "翻折"],
  mate: ["mate", "华为mate", "mate系列"],
  "p系列": ["p系列", "华为p", "p40", "p50", "p60"],
  nova: ["nova", "华为nova", "nova系列"],
  honor: ["honor", "荣耀", "rongyao", "荣耀手机"],
  magic: ["magic", "荣耀magic", "magic系列"],
  redmi: ["redmi", "红米", "小米红米", "红米手机", "rm"],
  iqoo: ["iqoo", "vivo iqoo", "iq系列"],
  find: ["find", "oppo find", "findx"],
  reno: ["reno", "oppo reno", "reno系列"],
  oneplus: ["oneplus", "一加", "1+", "op", "一加手机"],
  pro: ["pro", "专业版", "旗舰", "高端"],
  max: ["max", "最大", "大屏", "超大"],
  mini: ["mini", "迷你", "小型", "小屏"],
  plus: ["plus", "加大", "增强"],
  ultra: ["ultra", "极致", "超级", "旗舰"],
  lite: ["lite", "轻量", "简化", "青春版"],
  se: ["se", "特别版", "special edition"],
  classic: ["classic", "经典", "复古"],
  new: ["new", "新款", "最新", "新版"],
  old: ["old", "旧款", "老款", "旧版"],
  diy: ["diy", "动手", "自制", "自己动手", "手工"],
  kit: ["kit", "套件", "套装", "组合"],
  set: ["set", "套装", "组合", "整套"]
};
let loadedCategories = new Set();
async function loadDevicesForCategory(catId) {
    if (loadedCategories.has(catId)) return;
    loadedCategories.add(catId);
    try {
        const response = await fetch(`data/devices_${catId}.json`);
        if (response.ok) {
            const newDevices = await response.json();
            devices.push(...newDevices);
            console.log(`Loaded ${newDevices.length} devices for category ${catId}`);
        }
    } catch (e) {
        console.error(`Failed to load devices for category ${catId}:`, e);
    }
}
async function loadAllDevices() {
    const categoryIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    for (const catId of categoryIds) {
        await loadDevicesForCategory(catId);
    }
    console.log(`Total devices loaded: ${devices.length}`);
}
let currentDevice = null;
  // ====== 拼音搜索匹配 ======
  function matchPinyin(q, text) {
    const qLower = q.toLowerCase().trim();
    if (!qLower) return false;
    // 检查通用拼音映射
    for (const [chinese, pinyinList] of Object.entries(pinyinMap)) {
      if (text.includes(chinese)) {
        for (const py of pinyinList) {
          if (py.toLowerCase().includes(qLower) || qLower.includes(py)) return true;
        }
      }
    }
    return false;
  }
  // ====== 计算匹配分数 ======
  function scoreMatch(device, q) {
    const qLower = q.toLowerCase().trim();
    if (!qLower) return 1;
    let score = 0;
    // 名称完全匹配 - 最高权重
    if (device.name.toLowerCase() === qLower) score += 200;
    // 名称包含 - 高权重
    if (device.name.toLowerCase().includes(qLower)) score += 100;
    // 名称反向包含（名称包含在查询中）
    if (qLower.includes(device.name.toLowerCase())) score += 80;
    // 分类完全匹配
    if (device.category.toLowerCase() === qLower) score += 60;
    // 分类包含
    if (device.category.toLowerCase().includes(qLower)) score += 35;
    // 关键词匹配
    for (const kw of device.keywords || []) {
      const kwLower = kw.toLowerCase();
      if (kwLower === qLower) score += 50;
      else if (kwLower.includes(qLower)) score += 25;
      else if (qLower.includes(kwLower)) score += 20;
    }
    // 拼音匹配（设备名和分类）
    if (matchPinyin(q, device.name)) score += 30;
    if (matchPinyin(q, device.category)) score += 20;
    // 零件名称匹配 - 大幅降低权重，仅作辅助
    for (const p of device.parts || []) {
      const pName = (p.name || "").toLowerCase();
      if (pName.includes(qLower)) score += 3;
      if (matchPinyin(q, p.name || "")) score += 2;
    }
    // 步骤标题匹配 - 大幅降低权重，仅作辅助
    for (const s of device.steps || []) {
      const sTitle = (s.title || "").toLowerCase();
      if (sTitle.includes(qLower)) score += 2;
      if (matchPinyin(q, s.title || "")) score += 1;
    }
    // 模糊匹配：首字母/简写
    const nameWords = device.name.split(/[\s\-\/\(\)]+/);
    const nameAbbr = nameWords.map(w => w[0] || '').join('').toLowerCase();
    if (nameAbbr === qLower) score += 50;
    if (nameAbbr.includes(qLower)) score += 20;
    // 数字匹配（如搜索"13"能匹配"iPhone 13"）
    const numsInName = device.name.match(/\d+/g) || [];
    if (numsInName.some(n => n === qLower || n.includes(qLower))) score += 35;
    // 模糊同义词匹配
    const synonyms = {
      '手机': ['phone', 'iphone', 'android', '移动电话', '智能机'],
      '电脑': ['computer', 'pc', '笔记本', 'laptop', '台式机', 'mac'],
      '平板': ['tablet', 'ipad', 'pad'],
      '耳机': ['耳机', 'earphone', 'headphone', 'buds', 'airpods'],
      '手表': ['watch', '手环', 'band', 'iwatch'],
      '无人机': ['drone', 'uav', '飞行器', '大疆'],
      '音箱': ['speaker', '音响', 'homepod'],
      '键盘': ['keyboard', 'kb', '机械键盘'],
      '鼠标': ['mouse', '触控板'],
      '显示器': ['monitor', 'screen', '屏幕', 'display'],
      '相机': ['camera', '摄像头', '摄影'],
      '游戏': ['game', 'gaming', '游戏机', 'switch', 'ps5'],
      '智能家居': ['smart home', 'home', '智能设备', '物联网', 'iot'],
      '传感器': ['sensor', '传感器', 'module', '模块'],
      '开发板': ['arduino', 'raspberry', 'pi', 'esp32', 'stm32', '板子'],
      '充电': ['charge', '充电器', '充电宝', '电池'],
      '改装': ['改装', '改造', 'diy', '组装', '维修', 'fix', 'repair']
    };
    for (const [key, vals] of Object.entries(synonyms)) {
      if (device.name.toLowerCase().includes(key) || device.category.toLowerCase().includes(key)) {
        if (vals.some(v => v.includes(qLower) || qLower.includes(v))) score += 20;
      }
      if (qLower.includes(key)) {
        if (device.name.toLowerCase().includes(key) || vals.some(v => device.name.toLowerCase().includes(v))) score += 20;
      }
    }
    return score;
  }
  // ====== 搜索建议下拉 ======
  let suggestTimeout = null;
  function showSuggestions() {
    if (suggestTimeout) clearTimeout(suggestTimeout);
    suggestTimeout = setTimeout(() => {
      const q = document.getElementById("searchInput").value.trim().toLowerCase();
      const container = document.getElementById("suggestions");
      if (q.length < 1) {
        container.classList.remove("show");
        return;
      }
      const matches = devices
        .map(d => ({ device: d, score: scoreMatch(d, q) }))
        .filter(x => x.score >= 20)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      if (matches.length === 0) {
        container.classList.remove("show");
        return;
      }
      container.innerHTML = matches.map(m => {
        const iconClass = getIconClass(m.device.icon);
        return `
        <div class="suggestion-item" onclick="searchVal('${m.device.name}')">
          <span class="s-icon"><div class="icon ${iconClass}" style="width:14px;height:14px;"></div></span>
          <span class="s-name">${m.device.name}</span>
          <span class="s-cat">${m.device.category}</span>
        </div>
      `;
      }).join("");
      container.classList.add("show");
    }, 150);
  }
  // ====== 执行搜索 ======
  function doSearch() {
    const q = document.getElementById("searchInput").value.trim();
    document.getElementById("suggestions").classList.remove("show");
    if (!q) {
      renderDeviceGrid(null);
      return;
    }
    const results = devices
      .map(d => ({ device: d, score: scoreMatch(d, q) }))
      .filter(x => x.score >= 30)
      .sort((a, b) => b.score - a.score);
    if (results.length > 0 && results[0].score >= 40) {
      renderSingleResult(q, results[0].device);
    } else {
      renderNoResult(q);
    }
  }
  // ====== 搜索快捷值 ======
  function searchVal(q) {
    document.getElementById("searchInput").value = q;
    doSearch();
  }
  // ====== 分类筛选 ======
  let activeCategory = null;
  function filterByCategory(cat) {
    activeCategory = (activeCategory === cat) ? null : cat;
    renderCategoryGrid();
    renderDeviceGrid(activeCategory);
  }
  // ====== 渲染单个搜索结果 ======
  function renderSingleResult(query, device) {
    const wrapper = document.getElementById("search-box-wrapper");
    const searchBox = document.querySelector(".search-box");
    let resultDiv = document.getElementById("search-result-card");
    if (!resultDiv) {
      resultDiv = document.createElement("div");
      resultDiv.id = "search-result-card";
      resultDiv.className = "search-result-card";
      document.body.appendChild(resultDiv);
    }
    const rect = searchBox.getBoundingClientRect();
    resultDiv.style.top = (rect.bottom + 8) + "px";
    resultDiv.style.left = rect.left + "px";
    resultDiv.style.width = rect.width + "px";
    resultDiv.style.maxWidth = "none";
    resultDiv.style.transform = "translateY(-10px)";
    const iconClass = getIconClass(device.icon);
    resultDiv.innerHTML = `
      <div onclick='showDeviceDetail(${JSON.stringify(device.id).replace(/'/g, "&#39;")})'>
        <div class="sr-icon">
          <div class="icon ${iconClass}" style="width: 32px; height: 32px;"></div>
        </div>
        <div class="sr-content">
          <div class="sr-name">${device.name}</div>
          <div class="sr-cat">${device.category}</div>
          <div class="sr-meta">
            <span class="sr-difficulty">${device.difficulty}</span>
            <span class="sr-time">${device.time}</span>
            <span class="sr-budget">${device.budget}</span>
          </div>
        </div>
        <div class="sr-arrow">→</div>
      </div>
    `;
    resultDiv.classList.add("show");
    resultDiv.style.transform = "translateY(0)";
    renderDeviceGrid(null);
  }
  // ====== 渲染无结果 ======
  function renderNoResult(query) {
    const searchBox = document.querySelector(".search-box");
    let resultDiv = document.getElementById("search-result-card");
    if (!resultDiv) {
      resultDiv = document.createElement("div");
      resultDiv.id = "search-result-card";
      resultDiv.className = "search-result-card";
      document.body.appendChild(resultDiv);
    }
    const rect = searchBox.getBoundingClientRect();
    resultDiv.style.top = (rect.bottom + 8) + "px";
    resultDiv.style.left = rect.left + "px";
    resultDiv.style.width = rect.width + "px";
    resultDiv.style.maxWidth = "none";
    resultDiv.style.transform = "translateY(-10px)";
    resultDiv.innerHTML = `
      <div class="no-result">
        <div class="nr-icon">
          <div class="icon icon-search" style="width: 32px; height: 32px;"></div>
        </div>
        <div class="nr-text">未找到与 "${query}" 相关的设备</div>
        <div class="nr-tips">试试："手机维修"、"电脑组装"、"arduino"、"传感器"</div>
      </div>
    `;
    resultDiv.classList.add("show");
    resultDiv.style.transform = "translateY(0)";
    renderDeviceGrid(null);
  }
  // ====== 清空搜索结果 ======
  function clearSearchResult() {
    const resultDiv = document.getElementById("search-result-card");
    if (resultDiv) {
      resultDiv.classList.remove("show");
    }
  }
  // ====== 设备卡片HTML ======
  function deviceCardHTML(d) {
    const iconClass = getIconClass(d.icon);
    return `
      <div class="device-card" onclick='showDeviceDetail(${JSON.stringify(d.id).replace(/'/g, "&#39;")})'>
        <div class="device-icon">
          <div class="icon ${iconClass}" style="width: 28px; height: 28px;"></div>
        </div>
        <div class="device-info">
          <div class="device-name">${d.name}</div>
          <div class="device-cat">${d.category}</div>
          <div class="device-meta">
            <span>${d.difficulty}</span>
            <span>${d.time}</span>
            <span>¥${d.budgetNum}</span>
          </div>
        </div>
      </div>
    `;
  }
  // ====== 显示设备详情 ======
  function showDeviceDetail(deviceOrId) {
    let device = deviceOrId;
    if (typeof deviceOrId === "string") {
      device = devices.find(d => d.id === deviceOrId);
    }
    if (!device) return;
    currentDevice = device;
    hideNavbar();
    hideSearchResultCard();
    const typeText = device.type === "repair" ? "维修" : "组装";
    const typeColor = device.type === "repair" ? "#ef4444" : "#22c55e";
    const partsTable = device.parts.map((p, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${p.name}</strong>${p.spec ? `<div class="part-spec">${p.spec}</div>` : ""}</td>
        <td style="color: #64748b; font-size: 13px;">${p.model || "-"}</td>
        <td style="text-align: right;">¥${p.price}</td>
        <td><span style="background: rgba(34,197,94,0.1); color: #22c55e; padding: 2px 8px; border-radius: 4px; font-size: 12px;">${p.platform || "-"}</span></td>
        <td style="color: #64748b; font-size: 13px;">${p.note || "-"}</td>
      </tr>
    `).join("");
    const total = device.parts.reduce((s, p) => s + p.price, 0);
    const stepsHTML = device.steps.map((s, i) => `
      <div class="step-item">
        <div class="step-num">${i + 1}</div>
        <div class="step-content">
          <div class="step-title">${s.title}</div>
          ${s.desc ? `<div class="step-desc">${s.desc}</div>` : ""}
          ${s.tip ? `<div class="step-tip"><div class="icon icon-lightbulb" style="width:14px;height:14px;display:inline-block;margin-right:4px;"></div>${s.tip}</div>` : ""}
        </div>
      </div>
    `).join("");
    const related = devices
      .filter(d => d.category === device.category && d.id !== device.id)
      .slice(0, 6);
    const relatedHTML = related.length > 0 ? `
      <div class="section-title" style="margin-top: 28px;"><h2>相关设备</h2><span class="subtitle">同分类其他项目</span></div>
      <div class="related-grid">${related.map(d => deviceCardHTML(d)).join("")}</div>
    ` : "";
    const iconClass = getIconClass(device.icon);
    document.getElementById("deviceDetail").innerHTML = `
      <div class="detail-header">
        <div class="detail-icon">
          <div class="icon ${iconClass}" style="width: 48px; height: 48px;"></div>
        </div>
        <div class="detail-head-info">
          <h1>${device.name}</h1>
          <div class="detail-cat">${device.category} <span style="background: ${typeColor}20; color: ${typeColor}; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-left: 8px;">${typeText}</span></div>
          <div class="detail-badges">
            <span class="badge">难度：${device.difficulty}</span>
            <span class="badge">耗时：${device.time}</span>
            <span class="badge accent">预算：${device.budget}</span>
            <span class="badge success">零件：${device.parts.length} 个</span>
            <span class="badge">步骤：${device.steps.length} 步</span>
          </div>
        </div>
      </div>
      <h2 class="detail-h2"><div class="icon icon-tools" style="width:20px;height:20px;display:inline-block;margin-right:8px;"></div>零件清单</h2>
      <table>
        <thead><tr><th>#</th><th>零件名称</th><th>型号</th><th style="text-align: right;">单价</th><th>推荐购买</th><th>备注</th></tr></thead>
        <tbody>${partsTable}</tbody>
        <tfoot><tr><td colspan="3" style="text-align: right; font-weight: 600;">合计</td><td style="text-align: right; font-weight: 600; color: var(--primary);">¥${total}</td><td colspan="2"></td></tr></tfoot>
      </table>
      <h2 class="detail-h2" style="margin-top: 28px;"><div class="icon icon-info" style="width:20px;height:20px;display:inline-block;margin-right:8px;"></div>${typeText}步骤</h2>
      <div class="steps-list">${stepsHTML}</div>
      ${relatedHTML}
    `;
    showPage("result");
  }
  // ====== 页面切换 ======
  function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    const map = { search: "page-search", result: "page-result", ai: "page-ai" };
    const tabMap = { search: "search", result: "search", ai: "ai" };
    const el = document.getElementById(map[page]);
    if (el) el.classList.add("active");
    const tab = document.querySelector(`.nav-tab[data-page="${tabMap[page]}"]`);
    if (tab) tab.classList.add("active");
    window.scrollTo(0, 0);
  }
  let navbarHidden = false;
  function hideNavbar() {
    const navbar = document.getElementById("navbar");
    const toggleBtn = document.getElementById("navbarToggleBtn");
    if (navbar && !navbar.classList.contains("hidden")) {
      navbar.classList.add("hidden");
      navbarHidden = true;
    }
    if (toggleBtn && !toggleBtn.classList.contains("show")) {
      toggleBtn.classList.add("show");
    }
  }
  function showNavbar() {
    const navbar = document.getElementById("navbar");
    const toggleBtn = document.getElementById("navbarToggleBtn");
    if (navbar && navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      navbarHidden = false;
    }
    if (toggleBtn && toggleBtn.classList.contains("show")) {
      toggleBtn.classList.remove("show");
    }
  }
  function toggleNavbar() {
    if (navbarHidden) {
      showNavbar();
    } else {
      hideNavbar();
    }
  }
  function hideSearchResultCard() {
    const resultDiv = document.getElementById("search-result-card");
    if (resultDiv) {
      resultDiv.classList.remove("show");
      resultDiv.style.transform = "translateY(-10px)";
    }
  }
  function getIconClass(emoji) {
    const map = {
      "📱": "icon-phone",
      "🔋": "icon-battery",
      "📺": "icon-display",
      "📷": "icon-camera",
      "🔌": "icon-power",
      "🔧": "icon-tools",
      "🔊": "icon-audio",
      "📳": "icon-watch",
      "🚁": "icon-drone",
      "🎬": "icon-camera",
      "🌾": "icon-sensor",
      "🏭": "icon-motor",
      "🏎️": "icon-car",
      "📍": "icon-comm",
      "🎛️": "icon-dev",
      "⚡": "icon-spark",
      "⚙️": "icon-cpu",
      "🪚": "icon-tools",
      "📡": "icon-comm",
      "🎮": "icon-game",
      "💡": "icon-lightbulb",
      "👓": "icon-vr",
      "🖥️": "icon-pc",
      "🖨️": "icon-print",
      "🏠": "icon-home",
      "🎵": "icon-music",
      "🏥": "icon-medical",
      "⚠️": "icon-warning",
      "🔍": "icon-search",
      "✅": "icon-check",
      "❌": "icon-x",
      "ℹ️": "icon-info",
      "👤": "icon-info",
      "🤖": "icon-cpu",
      "🎚️": "icon-audio",
      "🕹️": "icon-game",
      "⌨️": "icon-dev",
      "🖱️": "icon-dev",
      "✈️": "icon-drone",
      "❤️": "icon-info",
      "🕶️": "icon-vr",
      "❄️": "icon-power",
      "📽️": "icon-camera",
      "👁️": "icon-camera"
    };
    return map[emoji] || "icon-phone";
  }
  // ====== 渲染分类网格 ======
  function renderCategoryGrid() {
    const grid = document.getElementById("categoryGrid");
    grid.innerHTML = categories.map(c => {
      const count = devices.filter(d => d.categoryId === c.id).length;
      const isActive = activeCategory === c.id;
      const iconClass = getIconClass(c.icon);
      return `
        <div class="category-card ${isActive ? "active" : ""}" onclick="filterByCategory(${c.id})" style="${isActive ? `border-color:${c.color};background:${c.color}10;` : ""}">
          <div class="cat-icon" style="background:${c.color}20;">
            <div class="icon ${iconClass}" style="width: 28px; height: 28px; --icon-color:${c.color};"></div>
          </div>
          <div class="cat-name">${c.name}</div>
          <div class="cat-count">${count} 项</div>
        </div>
      `;
    }).join("");
  }
  // ====== 渲染设备网格 ======
  let currentPage = 1;
const pageSize = 48;
function renderDeviceGrid(filterCat, page = 1) {
    const grid = document.getElementById("deviceGrid");
    const countLabel = document.getElementById("deviceCount");
    let list = devices;
    if (filterCat) {
      const catName = (categories.find(c => c.id === filterCat) || {}).name || "";
      list = devices.filter(d => d.categoryId === filterCat);
      countLabel.textContent = `${catName} · 共 ${list.length} 项`;
    } else {
      countLabel.textContent = `共 ${devices.length} 项设备`;
    }
    currentPage = page;
    const totalPages = Math.ceil(list.length / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    grid.innerHTML = list.slice(start, end).map(d => deviceCardHTML(d)).join("");
    renderPagination(totalPages, page, filterCat);
  }
  function renderPagination(totalPages, currentPage, filterCat) {
    const container = document.getElementById("pagination");
    if (!container) return;
    if (totalPages <= 1) {
      container.innerHTML = "";
      return;
    }
    let html = '<div class="pagination">';
    html += `<button class="page-btn" onclick="renderDeviceGrid(${filterCat || 'null'}, ${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>上一页</button>`;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="renderDeviceGrid(${filterCat || 'null'}, ${i})">${i}</button>`;
    }
    html += `<button class="page-btn" onclick="renderDeviceGrid(${filterCat || 'null'}, ${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>下一页</button>`;
    html += `<span class="page-info">第 ${currentPage} / ${totalPages} 页</span>`;
    html += '</div>';
    container.innerHTML = html;
  }
  // ====== AI 聊天功能 ======
  let chatMsgCount = 0;
  function addChatMsg(text, type) {
    const container = document.getElementById("chatMessages");
    const msg = document.createElement("div");
    msg.className = `chat-message ${type}`;
    const avatarSvg = type === "user"
      ? `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.07 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`;
    msg.innerHTML = `<div class="chat-avatar">${avatarSvg}</div><div class="chat-bubble">${text}</div>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }
  function addThinkingMsg() {
    const id = "thinking-" + Date.now();
    const container = document.getElementById("chatMessages");
    const msg = document.createElement("div");
    msg.id = id;
    msg.className = "chat-message ai";
    msg.innerHTML = `<div class="chat-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.07 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></div><div class="chat-bubble thinking"><span>思考中</span><span class="dots">...</span></div>`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return id;
  }
  function removeThinkingMsg(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
  function generateAIResponse(question) {
    const q = question.toLowerCase();
    // 关键词匹配设备
    const matched = devices
      .map(d => ({ device: d, score: scoreMatch(d, question) }))
      .filter(x => x.score > 5)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    if (q.includes("推荐") || q.includes("suggest") || q.includes("入门") || q.includes("新手")) {
      const beginner = devices
        .filter(d => d.difficulty === "简单" && d.budgetNum < 300)
        .slice(0, 5);
      return `
        <div style="font-weight:600;margin-bottom:8px;"><div class="icon icon-check" style="width:18px;height:18px;display:inline-block;margin-right:6px;"></div>推荐5个入门项目</div>
        ${beginner.map(d => {
          const ic = getIconClass(d.icon);
          return `<div style="margin:6px 0;padding:8px 12px;background:#f8fafc;border-radius:8px;cursor:pointer;" onclick='showDeviceDetail("${d.id}")'><div class="icon ${ic}" style="width:18px;height:18px;display:inline-block;margin-right:6px;"></div> <strong>${d.name}</strong> <span style="color:#64748b;font-size:13px;">${d.category} · ¥${d.budgetNum}</span></div>`;
        }).join("")}
        <div style="margin-top:10px;color:#64748b;font-size:13px;"><div class="icon icon-lightbulb" style="width:16px;height:16px;display:inline-block;margin-right:4px;"></div>这些项目难度低，预算适中，非常适合初学者上手！</div>
      `;
    }
    if (q.includes("多少钱") || q.includes("预算") || q.includes("cost") || q.includes("价格")) {
      const randomDevs = devices.slice(0, 4);
      return `
        <div style="font-weight:600;margin-bottom:8px;">💰 DIY项目预算参考</div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr style="background:#f1f5f9;"><th style="padding:8px;text-align:left;">难度</th><th style="padding:8px;text-align:left;">典型预算</th><th style="padding:8px;text-align:left;">代表项目</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;">简单</td><td style="padding:8px;border-bottom:1px solid #e2e8f0;">¥100-300</td><td style="padding:8px;border-bottom:1px solid #e2e8f0;">基础传感器、小工具</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;">中等</td><td style="padding:8px;border-bottom:1px solid #e2e8f0;">¥300-1500</td><td style="padding:8px;border-bottom:1px solid #e2e8f0;">键盘、音频、无人机</td></tr>
          <tr><td style="padding:8px;">较高</td><td style="padding:8px;">¥1500+</td><td style="padding:8px;">手机维修、高级机器人</td></tr>
        </table>
      `;
    }
    if (matched.length > 0) {
      return `
        <div style="font-weight:600;margin-bottom:8px;"><div class="icon icon-tools" style="width:18px;height:18px;display:inline-block;margin-right:6px;"></div>我找到了 ${matched.length} 个相关项目</div>
        ${matched.map(m => {
          const ic = getIconClass(m.device.icon);
          return `<div style="margin:6px 0;padding:10px 12px;background:#eff6ff;border-radius:8px;cursor:pointer;" onclick='showDeviceDetail("${m.device.id}")'><div style="font-weight:500;"><div class="icon ${ic}" style="width:18px;height:18px;display:inline-block;margin-right:6px;"></div>${m.device.name}</div><div style="font-size:12px;color:#64748b;margin-top:4px;">${m.device.category} · ${m.device.difficulty} · ${m.device.time} · ¥${m.device.budgetNum} · ${m.device.parts.length}个零件</div></div>`;
        }).join("")}
        <div style="margin-top:10px;color:#64748b;font-size:13px;"><div class="icon icon-lightbulb" style="width:16px;height:16px;display:inline-block;margin-right:4px;"></div>点击项目可查看详细零件清单和组装步骤</div>
      `;
    }
    const tips = [
      "开始DIY前，先阅读安全提示：焊接时戴护目镜，使用稳压电源，注意静电防护。",
      "组装前建议先做功能测试：使用面包板临时接线验证每个模块工作正常。",
      "工具建议：万用表、恒温焊台、精密螺丝刀套装是电子DIY的三件套。",
      "购买零件推荐：选择有质量保证的商家，注意查看规格参数是否匹配。",
      "遇到问题时：分模块排查，检查电源、接线、代码，循序渐进调试。"
    ];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    return `
      <div style="font-weight:600;margin-bottom:8px;">💭 关于 "${question}" 的建议</div>
      <div style="line-height:1.8;">${tip}</div>
      <div style="margin-top:10px;padding:10px;background:#f1f5f9;border-radius:8px;font-size:13px;color:#475569;">您可以尝试搜索具体设备，如："无人机"、"机械键盘"、"Arduino"、"传感器" 等，我会为您展示详细的零件清单和组装步骤。</div>
    `;
  }
  function sendMsg() {
    const input = document.getElementById("chatInput");
    const q = input.value.trim();
    if (!q) return;
    input.value = "";
    addChatMsg(q, "user");
    const tid = addThinkingMsg();
    setTimeout(() => {
      removeThinkingMsg(tid);
      const reply = generateAIResponse(q);
      addChatMsg(reply, "ai");
    }, 700 + Math.random() * 500);
  }
  function askAI(question) {
    document.getElementById("chatInput").value = question;
    sendMsg();
  }
  // ====== 初始化 ======
  document.addEventListener("DOMContentLoaded", function() {
    // 渲染分类和设备
    renderCategoryGrid();
    renderDeviceGrid(null);
    // 统计信息
    const totalParts = devices.reduce((s, d) => s + d.parts.length, 0);
    const totalSteps = devices.reduce((s, d) => s + d.steps.length, 0);
    const avgBudget = Math.round(devices.reduce((s, d) => s + d.budgetNum, 0) / devices.length);
    document.getElementById("stats").innerHTML = `
      <div class="stat-item"><div class="stat-num">${devices.length}+</div><div class="stat-label">设备项目</div></div>
      <div class="stat-item"><div class="stat-num">${categories.length}</div><div class="stat-label">分类</div></div>
      <div class="stat-item"><div class="stat-num">${totalParts}+</div><div class="stat-label">零件条目</div></div>
      <div class="stat-item"><div class="stat-num">${totalSteps}+</div><div class="stat-label">组装步骤</div></div>
    `;
    // 热门搜索标签
    const hotTags = ["无人机", "Arduino", "机械键盘", "传感器", "蓝牙音箱", "树莓派", "ESP32", "智能手表", "VR设备", "监控摄像头", "3D打印机", "电机驱动", "电源模块", "OLED屏幕", "游戏手柄"];
    document.getElementById("hotTags").innerHTML = hotTags.map(t =>
      `<span class="hot-tag" onclick="searchVal('${t}')">${t}</span>`
    ).join("");
    // 快捷问题
    const quickQs = [
      "我是新手，有什么推荐的项目？",
      "DIY一个机械键盘需要多少钱？",
      "怎么组装一台无人机？",
      "Arduino和ESP32有什么区别？",
      "推荐入门的传感器项目",
      "想做一个智能家居项目"
    ];
    document.getElementById("quickQuestions").innerHTML = quickQs.map(q =>
      `<button class="quick-q" onclick="askAI('${q}')">${q}</button>`
    ).join("");
    // 搜索输入事件
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", showSuggestions);
    searchInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") doSearch();
    });
    // 点击其他区域隐藏建议
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".search-box-wrapper")) {
        document.getElementById("suggestions").classList.remove("show");
      }
    });
  });
