const services = [
    {
        name: "Zoom one pro",
        image: "./Image/zoom.png",
        price: "99.000vnd / tháng",
        information: "Kiểm soát thông tin liên lạc của bạn với giấy phép Zoom One Pro. Mở khóa các công cụ cộng tác nâng cao hơn, các tính năng mới và số phút họp không giới hạn khi bạn chuyển sang Pro.",
        image1: "./Image/iamgezoomonepro.jpg",
        giagoc: "219.000vnd / tháng",
        tinhnang: [
            {
                title: "Số Lượng Người Tham Gia",
                content: "Lên đến 100 người"
            },
            {
                title: "Thời Gian Họp",
                content: "Bản thường: 40 phút, Bản Pro: lên đến 30 giờ cho một cuộc họp"
            },
            {
                title: "Thay đổi ID dễ nhớ",
                content: "ID phòng họp cá nhân có 10 số và người dùng có thể thay đổi tùy ý theo số đẹp, số tam hoa cho dễ nhớ, miễn là ID đó chưa có ai tạo trước đó."
            },
            {
                title: "Cấp đồng chủ trì (Co-host) quản trị phòng",
                content: "Với tính năng cấp Đồng chủ trì (Co-host), hỗ trợ chủ phòng có thêm một cộng sự quản lý phòng học Zoom sao cho hiệu quả hơn."
            },
            {
                title: "Phát Trực Tiếp trên Facebook và Youtube",
                content: "Cuộc họp Zoom có thể phát Live trên nhiều nền tảng mạng xã hội để buổi học, cuộc họp đó được chia sẻ và tiếp cận với nhiều người hơn."
            },
            {
                title: "Tính Năng Breakout Room",
                content: "Tính năng này cho phép tất cả các học viên vào từng nhóm nhỏ để có thể tiện trao đổi 1-1 hoặc nhiều hơn."
            }
            ,
            {
                title: "Ghi lại cuộc họp",
                content: "Cuộc học được tích hợp thêm tùy chọn lưu trữ đám mây lên đến 5GB. Nếu mọi người muốn ghi lại toàn bộ cuộc trò chuyện trong cuộc họp thì chỉ cần nhấn chọn vào nút Start Recording. Tùy vào nhu cầu của từng người mà mọi người có thể lưu lại bản ghi trên thiết bị của bản thân. Bên cạnh đó, để không bị mất thì bạn cũng có thể lưu trữ lên đám mây của mình."
            },
            {
                title: "Tắt tiếng người tham gia",
                content: "Nếu trong quá trình tham gia cuộc họp mà 2 phía xuất hiện âm thanh gây tiếng ồn thì 1 trong 2 bên có quyền được tắt micro để tránh làm phiền tới những người khác."
            }
        ],
        baohanh:[
            "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
            "Nâng cấp trong 5-15 phút",
            "Hỗ trợ kỹ thuật 24/7",
            "Hướng dẫn sử dụng chi tiết",
            "Miễn phí cập nhật phần mềm",
            "Miễn phí cài đặt và hướng dẫn sử dụng",
            "Hỗ trợ trực tuyến qua Teamview, Ultraview",
        ],
        lienkethuongdan :[
            {
                title:"Cách tạo id phòng số đẹp",
                lienket: "hdidphong.html",
            },
            {
                title: "Cách đổi mật khẩu tài khoản",
                lienket: "./hddoimatkhau.html"
            },
            {
                title: "Cách link phòng học riêng tự động cho nhiều lớp",
                lienket: "./hdquanlyphonghoc.html"
            }
        ],
        imagefeedback: [
            "./Image/feedbackzoom1.jpeg",
            "./Image/feedbackzoom2.jpeg",
            "./Image/feedbackzoom3.jpeg",
            "./Image/feedbackzoom4.jpeg",
            "./Image/feedbackzoom5.jpeg",
           
        ]
    },
    {
      name: "Zoom theo yêu cầu",
      image: "./Image/zoomtheoyc.png",
      price: "10.000vnd /1 ngày ",
      image1: "./Image/anhzoomdep.jpg",
      giagoc: "219.000vnd / tháng",
      tinhnang: [
        {
            title: "Số Lượng Người Tham Gia",
            content: "Lên đến 100 người"
        },
        {
            title: "Thời Gian Họp",
            content: "Bản thường: 40 phút, Bản Pro: lên đến 30 giờ cho một cuộc họp"
        },
        {
            title: "Thay đổi ID dễ nhớ",
            content: "ID phòng họp cá nhân có 10 số và người dùng có thể thay đổi tùy ý theo số đẹp, số tam hoa cho dễ nhớ, miễn là ID đó chưa có ai tạo trước đó."
        },
        {
            title: "Cấp đồng chủ trì (Co-host) quản trị phòng",
            content: "Với tính năng cấp Đồng chủ trì (Co-host), hỗ trợ chủ phòng có thêm một cộng sự quản lý phòng học Zoom sao cho hiệu quả hơn."
        },
        {
            title: "Phát Trực Tiếp trên Facebook và Youtube",
            content: "Cuộc họp Zoom có thể phát Live trên nhiều nền tảng mạng xã hội để buổi học, cuộc họp đó được chia sẻ và tiếp cận với nhiều người hơn."
        },
        {
            title: "Tính Năng Breakout Room",
            content: "Tính năng này cho phép tất cả các học viên vào từng nhóm nhỏ để có thể tiện trao đổi 1-1 hoặc nhiều hơn."
        }
        ,
        {
            title: "Ghi lại cuộc họp",
            content: "Cuộc học được tích hợp thêm tùy chọn lưu trữ đám mây lên đến 5GB. Nếu mọi người muốn ghi lại toàn bộ cuộc trò chuyện trong cuộc họp thì chỉ cần nhấn chọn vào nút Start Recording. Tùy vào nhu cầu của từng người mà mọi người có thể lưu lại bản ghi trên thiết bị của bản thân. Bên cạnh đó, để không bị mất thì bạn cũng có thể lưu trữ lên đám mây của mình."
        },
        {
            title: "Tắt tiếng người tham gia",
            content: "Nếu trong quá trình tham gia cuộc họp mà 2 phía xuất hiện âm thanh gây tiếng ồn thì 1 trong 2 bên có quyền được tắt micro để tránh làm phiền tới những người khác."
        }
    ],
    baohanh:[
        "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
        "Nâng cấp trong 5-15 phút",
        "Hỗ trợ kỹ thuật 24/7",
        "Hướng dẫn sử dụng chi tiết",
        "Miễn phí cập nhật phần mềm",
        "Miễn phí cài đặt và hướng dẫn sử dụng",
        "Hỗ trợ trực tuyến qua Teamview, Ultraview",
    ],
    lienkethuongdan :[
        {
            title:"Cách tạo id phòng số đẹp",
            lienket: "hdidphong.html",
        },
        {
            title: "Cách đổi mật khẩu tài khoản",
            lienket: "./hddoimatkhau.html"
        }
    ],
    imagefeedback: [
        "./Image/feedbackzoom1.jpeg",
        "./Image/feedbackzoom2.jpeg",
        "./Image/feedbackzoom3.jpeg",
        "./Image/feedbackzoom4.jpeg",
        "./Image/feedbackzoom5.jpeg",
       
    ]
  },
    {
        name: "Google Meet",
        image: "./Image/new.png",
        price: "80.000vnd / tháng",
        image1: "./Image/imagegooogleone.avif",
        giagoc: "219.000vnd / tháng",
        tinhnang: [
            {
                title: "Tích Hợp Google Meet premium",
                content: "Khi nâng cấp bạn sẽ được sử dụng google Meet premium của Google với nhiều tính năng hơn như: Thời gian họp không giới hạn, Họp với 250 người, Ghi lại cuộc họp, Chia sẻ màn hình, Tích hợp với Google Calendar, Điều chỉnh chất lượng video"
            },
            {
                title: "Bộ Nhớ Được Mở Rộng",
                content: "Tùy theo gói bạn chọn mà bộ nhớ sẽ được mở rộng lên đến 100GB, 200GB hoặc 2TB. Bạn có thể lưu trữ nhiều hơn nhiều dữ liệu cá nhân, hình ảnh, video, tài liệu, văn bản, email, v.v."
            },
            {
                title: "Tính năng lên lịch hẹn nâng cao",
                content: "Bạn có thể sử dụng cuộc hẹn tuỳ chỉnh và nhiều tính năng khác trong Lịch Google để quản lý thời gian rảnh."
            },
            {
                title: "Được nâng cấp AI của Google Gemini",
                content: "Được sử dụng công nghệ AI của Google Gemini Bản nâng cấp để tìm kiếm thông tin nhanh chóng, chính xác hơn và tìm kiếm bằng hình ảnh..."
            },
            {
                title: "Bảo mật và đảm bảo an ninh",
                content: "Google One đảm bảo tính bảo mật và an toàn cho dữ liệu của bạn. Dữ liệu được mã hóa khi lưu trữ trên máy chủ của Google, giúp bảo vệ thông tin cá nhân và ngăn chặn truy cập trái phép."
            },
            {
                title: "Sao lưu và phục hồi dữ liệu",
                content: " Google One cung cấp khả năng sao lưu dữ liệu quan trọng của bạn. Bạn có thể tự động sao lưu dữ liệu từ điện thoại di động, máy tính và các thiết bị khác vào không gian lưu trữ đám mây của Google One. Nếu bạn mất dữ liệu hoặc cần phục hồi, bạn có thể khôi phục nhanh chóng từ bản sao lưu."
            }
           
        ],
        
        baohanh:[
            "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
            "Nâng cấp trong 5-15 phút",
            "Hỗ trợ kỹ thuật 24/7",
            "Hướng dẫn sử dụng chi tiết",
            "Miễn phí cập nhật phần mềm",
            "Miễn phí cài đặt và hướng dẫn sử dụng",
            "Hỗ trợ trực tuyến qua Teamview, Ultraview",
            

        ],
        lienkethuongdan :[
            {
                title:"Google Meet premium là gì",
                lienket: "hdidphong.html",
            }
        ],
        imagefeedback: [
            "./Image/feedbackggone.jpg"
           
        ]
    },
    {
        name: "Youtube Premium",
        image: "./Image/youtube.png",
        price: "25.000vnd / tháng - 130.000vnd / 6 tháng",
        image1: "./Image/imageyoutubepremium.avif",
        information: "Youtube Premium (hay còn gọi là YouTube Red) là một dịch vụ cung cấp video nhạc và nhạc không chứa quảng cáo trên các nền tảng YouTube và Google Play Music.",
        giagoc: "79.000vnd / tháng",
        tinhnang: [
            {
                title: "Truy cập danh sách phát video từ điện thoại và máy tính bảng",
                content: "YouTube từ lâu đã cung cấp danh sách phát video nhưng bị giới hạn sử dụng trên web và không sử dụng được trên thiết bị di động. Tuy nhiên, khi đăng ký YouTube Premium, thì giờ đây bạn có thể tạo danh sách phát video trên smartphone hoặc tablet của mình."
            },
            {
                title: "Xem video không quảng cáo",
                content: "Đây là một trong những tính năng ĐÁNG TIỀN nhất của Youtube Premium. Theo đó, người dùng đăng ký gói dịch vụ này có thể xem hàng triệu video mà không bị làm phiền bởi quảng cáo trước và trong khi phát."
            },
            {
                title: "Phát trong nền",
                content: "Với Youtube Premium, người dùng có thể phát những video trong khi đang sử dụng những ứng dụng khác hoặc tắt màn hình."
            },
            {
                title: "Tải xuống video yêu thích dễ dàng",
                content: "Khi đăng ký YouTube Premium, bạn có thể tải xuống những video yêu thích để phát lại khi không có mạng. Chưa hết, gói đăng ký này còn mang tới một tính năng cực kỳ hữu ích khác là tải xuống thông minh. Cụ thể, khi được kết nối với Wi-Fi, thì ứng dụng YouTube trên điện thoại sẽ tự động tải xuống nội dung được đề xuất dựa trên lịch sử phát lại để xem ngoại tuyến."
            },
            {
                title: "Tận hưởng chất lượng video vượt trội",
                content: "Là một phần của đăng ký YouTube Premium, bạn có thể xem các video Full-HD chất lượng cao trên iPhone hoặc iPad của mình. YouTube đang triển khai tùy chọn phát video chất lượng 1080p Premium."
            },
            {
                title: "Tiếp tục xem video trên các thiết bị khác nhau",
                content: "Nếu thường xuyên chuyển đổi xem video YouTube giữa điện thoại Android, iPad và PC, thì việc đăng ký YouTube Premium sẽ giúp bạn truy cập video đang xem dễ dàng hơn."
            }
            
        ],
        baohanh:[
            "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
            "Nâng cấp trong 5-15 phút",
            "Hỗ trợ kỹ thuật 24/7",
            "Hướng dẫn sử dụng chi tiết",
            "Miễn phí cập nhật phần mềm",
            "Miễn phí cài đặt và hướng dẫn sử dụng",
            "Hỗ trợ trực tuyến qua Teamview, Ultraview",
            

        ],
        lienkethuongdan :[
            {
                title:"Gói gia đình Youtube Premium",
                lienket: "hdidphong.html",
            }
        ],
        imagefeedback: [
            "./Image/feedbackzoom5.jpeg",
           
        ]
    }
    ,
    {
    name: "Tradingview Premium",
    image: "./Image/tradingview.png",
    price: "150.000đ/tháng",
    image1: "./Image/tradingviewcontent.png",
    giagoc: "1.668.000đ/tháng",
    tinhnang: [
      {
        title: "Biểu Đồ Trên Tab",
        content: "8 biểu đồ trên mỗi tab"
      },
      {
        title: "Số lượng bố cục đã lưu",
        content: "Không giới hạn số lượng bố cục đã lưu"
      },
      {
        title: "Sử dụng cùng lúc",
        content: "Sử dụng được trên 5 thiết bị cùng lúc."
      },
      {
        title: "Khung thời gian tùy chỉnh",
        content: "Khung thời gian tùy chỉnh: 3m, 2h, 45p..."
      }
      ,
      {
        title: "Chỉ số",
        content: "24 Chỉ số trên chỉ báo"
      }
      ,
      {
        title: "Chỉ báo",
        content: "25 Chỉ báo trên mỗi biểu đồ"
      }
      ,
      {
        title: "Xem lại ",
        content: "Cho phép “tua lại thị trường” để xem xét chi tiết tốc độ được cài đặt"
      }
      ,
      {
        title: "Hỗ trợ 18 mốc thời gian",
        content: "Hỗ trợ 18 mốc thời gian từ 1 giây đến 1 tháng, cùng với thanh phạm vi giúp người dùng dễ dàng xác định thời điểm chính xác hơn"
      }
      ,
      {
        title: "Báo cáo chiến lược",
        content: "Cung cấp báo cáo chi tiết về hiệu suất chiến lược của bạn và tất cả các sản phẩm tài chính theo đúng thời gian thực khi giao dịch"
      }
      ,
      {
        title: "Hiển thị cảnh báo giao dịch",
        content: "Hiển thị cảnh bảo giao dịch dựa trên dữ liệu điện toán đám mây, từ đó mô phỏng giao dịch thực tế ngay trên biểu đồ."
      }
    ],
    baohanh:[
        "1 đổi 1 nếu có lỗi trong thời gian sử dụng",
        "Hỗ trợ kỹ thuật 24/7",
        "Hướng dẫn sử dụng chi tiết",
        "Miễn phí cập nhật phần mềm",
        "Miễn phí cài đặt và hướng dẫn sử dụng",
        "Hỗ trợ trực tuyến qua Teamview, Ultraview",
        

    ],
    lienkethuongdan :[
      {
        title:"Hướng dẫn sử dụng Canva Pro",
        lienket: "https://www.canva.com/learn/how-to-canva-beginners-guide/"
      },
      {
        title: "Mẹo và thủ thuật Canva Pro",
        lienket: "https://kripeshadwani.com/canva-tips-and-tricks/"
      }
    ], tinhnang: [
      {
        title: "Biểu Đồ Trên Tab",
        content: "8 biểu đồ trên mỗi tab"
      },
      {
        title: "Số lượng bố cục đã lưu",
        content: "Không giới hạn số lượng bố cục đã lưu"
      },
      {
        title: "Sử dụng cùng lúc",
        content: "Sử dụng được trên 5 thiết bị cùng lúc."
      },
      {
        title: "Khung thời gian tùy chỉnh",
        content: "Khung thời gian tùy chỉnh: 3m, 2h, 45p..."
      }
      ,
      {
        title: "Chỉ số",
        content: "24 Chỉ số trên chỉ báo"
      }
      ,
      {
        title: "Chỉ báo",
        content: "25 Chỉ báo trên mỗi biểu đồ"
      }
      ,
      {
        title: "Xem lại ",
        content: "Cho phép “tua lại thị trường” để xem xét chi tiết tốc độ được cài đặt"
      }
      ,
      {
        title: "Hỗ trợ 18 mốc thời gian",
        content: "Hỗ trợ 18 mốc thời gian từ 1 giây đến 1 tháng, cùng với thanh phạm vi giúp người dùng dễ dàng xác định thời điểm chính xác hơn"
      }
      ,
      {
        title: "Báo cáo chiến lược",
        content: "Cung cấp báo cáo chi tiết về hiệu suất chiến lược của bạn và tất cả các sản phẩm tài chính theo đúng thời gian thực khi giao dịch"
      }
      ,
      {
        title: "Hiển thị cảnh báo giao dịch",
        content: "Hiển thị cảnh bảo giao dịch dựa trên dữ liệu điện toán đám mây, từ đó mô phỏng giao dịch thực tế ngay trên biểu đồ."
      }
    ],

    baohanh:[
        "1 đổi 1 nếu có lỗi trong thời gian sử dụng",
        "Hỗ trợ kỹ thuật 24/7",
        "Hướng dẫn sử dụng chi tiết",
        "Miễn phí cập nhật phần mềm",
        "Miễn phí cài đặt và hướng dẫn sử dụng",
        "Hỗ trợ trực tuyến qua Teamview, Ultraview",
        

    ],
    lienkethuongdan :[
      {
        title:"Hướng dẫn sử dụng TradingView từ A đến Z mới nhất",
        lienket: "https://nguyenhuuduc.com.vn/huong-dan-tradingview-tu-a-den-z-moi-nhat/"
      }
    ],
    imagefeedback: [
      "./Image/tradingviewfeedback.jpg",
     
     
    ]
  }
    ,
    {
    name: "Canva Pro",
    image: "./Image/canva.png",
    price: "70k/năm",
    image1: "https://www.canva.com/pro/premium-content/",
    giagoc: "1.190.000đ/năm",
    tinhnang: [
      {
        title: "Hàng triệu mẫu",
        content: "Truy cập hàng triệu mẫu thiết kế cho mọi nhu cầu của bạn, từ mạng xã hội đến in ấn."
      },
      {
        title: "Công cụ chỉnh sửa nâng cao",
        content: "Sử dụng các công cụ chỉnh sửa mạnh mẽ để tạo ra thiết kế hoàn hảo."
      },
      {
        title: "Lưu trữ không giới hạn",
        content: "Lưu trữ tất cả các thiết kế của bạn trong kho lưu trữ đám mây không giới hạn."
      },
      {
        title: "Hỗ trợ 24/7",
        content: "Nhận hỗ trợ 24/7 từ nhóm chuyên gia của Canva."
      }
    ],
    baohanh:[
        "1 đổi 1 nếu có lỗi trong thời gian sử dụng",
        "Hỗ trợ kỹ thuật 24/7",
        "Hướng dẫn sử dụng chi tiết",
        "Miễn phí cập nhật phần mềm",
        "Miễn phí cài đặt và hướng dẫn sử dụng",
        "Hỗ trợ trực tuyến qua Teamview, Ultraview",
        

    ],
    lienkethuongdan :[
      {
        title:"Hướng dẫn sử dụng Canva Pro",
        lienket: "https://www.canva.com/learn/how-to-canva-beginners-guide/"
      },
      {
        title: "Mẹo và thủ thuật Canva Pro",
        lienket: "https://kripeshadwani.com/canva-tips-and-tricks/"
      }
    ],
    imagefeedback: [
      "https://www.g2.com/products/canva/reviews",
      "https://www.g2.com/products/canva/reviews",
      "https://www.canva.com/help/review-designs/",
      "https://www.canva.com/help/get-in-touch/general-feedback/",
      "https://www.canva.com/help/get-in-touch/general-feedback/",
     
    ]
  }
  ,{
    name: "Capcut Pro",
    image: "./Image/capcut.png",
    price: "120k/năm",
    image1: "https://www.canva.com/pro/premium-content/",
    giagoc: "1.190.000đ/năm",
    tinhnang: [
      {
        title: "Hàng triệu mẫu",
        content: "Truy cập hàng triệu mẫu thiết kế cho mọi nhu cầu của bạn, từ mạng xã hội đến in ấn."
      },
      {
        title: "Công cụ chỉnh sửa nâng cao",
        content: "Sử dụng các công cụ chỉnh sửa mạnh mẽ để tạo ra thiết kế hoàn hảo."
      },
      {
        title: "Lưu trữ không giới hạn",
        content: "Lưu trữ tất cả các thiết kế của bạn trong kho lưu trữ đám mây không giới hạn."
      },
      {
        title: "Hỗ trợ 24/7",
        content: "Nhận hỗ trợ 24/7 từ nhóm chuyên gia của Canva."
      }
    ],
    baohanh:[
        "1 đổi 1 nếu có lỗi trong thời gian sử dụng",
        "Hỗ trợ kỹ thuật 24/7",
        "Hướng dẫn sử dụng chi tiết",
        "Miễn phí cập nhật phần mềm",
        "Miễn phí cài đặt và hướng dẫn sử dụng",
        "Hỗ trợ trực tuyến qua Teamview, Ultraview",
        

    ],
    lienkethuongdan :[
      {
        title:"Hướng dẫn sử dụng Canva Pro",
        lienket: "https://www.canva.com/learn/how-to-canva-beginners-guide/"
      },
      {
        title: "Mẹo và thủ thuật Canva Pro",
        lienket: "https://kripeshadwani.com/canva-tips-and-tricks/"
      }
    ],
    imagefeedback: [
      "https://www.g2.com/products/canva/reviews",
      "https://www.g2.com/products/canva/reviews",
      "https://www.canva.com/help/review-designs/",
      "https://www.canva.com/help/get-in-touch/general-feedback/",
      "https://www.canva.com/help/get-in-touch/general-feedback/",
     
    ]
  }
  ,
  {
    name: "Quizlet Pro",
    image: "./Image/quizlet.png",
    price: "50k/năm",
    image1: "./Image/quizlet-image1.png",
    giagoc: "Giá canva pro",
    tinhnang: [
      {
        title: "Không giới hạn học và tạo bộ học",
        content: "Với Quizlet Pro, bạn có thể tạo và học không giới hạn số lượng bộ học với các công cụ và tài nguyên phong phú."
      },
      {
        title: "Học ngoại tuyến",
        content: "Người dùng có thể tải xuống bộ học và học ngoại tuyến mà không cần kết nối Internet."
      },
      {
        title: "Tùy chỉnh hình nền và giao diện",
        content: "Quizlet Pro cho phép bạn tùy chỉnh hình nền và giao diện của bộ học để làm cho việc học trở nên thú vị hơn."
      },
      {
        title: "Không quảng cáo",
        content: "Với tài khoản Quizlet Pro, bạn có thể học mà không bị làm phiền bởi quảng cáo."
      },
      {
        title: "Theo dõi tiến độ học tập",
        content: "Quizlet Pro cung cấp các công cụ để theo dõi tiến độ học tập của bạn, giúp bạn biết được mình đã học đến đâu và cần cải thiện ở đâu."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn đăng ký Quizlet Pro",
        lienket: "huongdandangkysquizletpro.html"
      },
      {
        title: "Cách sử dụng Quizlet hiệu quả",
        lienket: "cachsudungquizletehieuqua.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackquizlet1.jpeg",
      "./Image/feedbackquizlet2.jpeg"
    ]
  }
  ,
  {
    name: "Netflix",
    image: "./Image/netflix.png",
    price: "70k/tháng",
    image1: "https://www.canva.com/pro/premium-content/",
    giagoc: "129k/tháng",
    tinhnang: [
      {
        title: "Xem không giới hạn phim và chương trình TV",
        content: "Với Netflix, bạn có thể xem hàng ngàn phim và chương trình TV không giới hạn mà không bị làm phiền bởi quảng cáo."
      },
      {
        title: "Tải xuống và xem ngoại tuyến",
        content: "Người dùng có thể tải xuống các tập phim và bộ phim yêu thích để xem ngoại tuyến bất cứ lúc nào, ngay cả khi không có kết nối Internet."
      },
      {
        title: "Chất lượng hình ảnh tuyệt hảo",
        content: "Netflix cung cấp chất lượng hình ảnh lên đến 4K Ultra HD, mang lại trải nghiệm xem phim tuyệt vời."
      },
      {
        title: "Hồ sơ cá nhân",
        content: "Mỗi tài khoản Netflix có thể tạo nhiều hồ sơ cá nhân để mỗi người dùng có thể lưu trữ danh sách phim yêu thích của riêng mình."
      },
      {
        title: "Khả năng xem trên nhiều thiết bị",
        content: "Người dùng có thể xem Netflix trên nhiều thiết bị khác nhau như TV, máy tính, máy tính bảng và điện thoại di động."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn đăng ký Netflix",
        lienket: "huongdandangkynetflix.html"
      },
      {
        title: "Cách tải phim trên Netflix",
        lienket: "cachtainetflix.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbacknetflix1.jpeg",
      "./Image/feedbacknetflix2.jpeg"
    ]
  }
,
{
    name: "ChatGPT Plus(Chính chủ Không Lỗi)",
    image: "./Image/chatgpt.png",
    price: "500k/tháng",
    image1: "./Image/chatgpt-image1.png",
    giagoc: "650k/tháng",
    tinhnang: [
      {
        title: "Truy cập ưu tiên",
        content: "Người dùng ChatGPT Plus sẽ có quyền truy cập ưu tiên, kể cả trong những thời điểm cao điểm."
      },
      {
        title: "Tốc độ phản hồi nhanh hơn",
        content: "Với ChatGPT Plus, thời gian phản hồi sẽ nhanh hơn so với phiên bản miễn phí."
      },
      {
        title: "Sử dụng các tính năng mới",
        content: "Người dùng ChatGPT Plus sẽ được sử dụng các tính năng và cập nhật mới nhất trước khi được phát hành rộng rãi."
      },
      {
        title: "Hỗ trợ kỹ thuật 24/7",
        content: "Hỗ trợ kỹ thuật toàn diện và nhanh chóng, sẵn sàng giải đáp mọi thắc mắc của bạn 24/7."
      },
      {
        title: "Bảo mật cao",
        content: "ChatGPT Plus cung cấp mức độ bảo mật cao hơn, bảo vệ dữ liệu người dùng một cách tối đa."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn đăng ký ChatGPT Plus",
        lienket: "huongdandangkychatgptplus.html"
      },
      {
        title: "Cách sử dụng ChatGPT hiệu quả",
        lienket: "cachsudungchatgptehieuqua.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackchatgpt1.jpeg",
      "./Image/feedbackchatgpt2.jpeg"
    ]
  }
,
{
    name: "VieON VIP",
    image: "./Image/vieon.png",
    price: "25k/tháng",
    image1: "./Image/vieon-image1.png",
    giagoc: "50k/tháng",
    tinhnang: [
      {
        title: "Xem không quảng cáo",
        content: "Thưởng thức các chương trình và phim truyện mà không bị gián đoạn bởi quảng cáo."
      },
      {
        title: "Truy cập nội dung độc quyền",
        content: "Người dùng VieON VIP có thể truy cập các nội dung độc quyền mà không có trên gói miễn phí."
      },
      {
        title: "Chất lượng HD/4K",
        content: "Xem phim và chương trình truyền hình với chất lượng hình ảnh cao nhất, bao gồm HD và 4K."
      },
      {
        title: "Tải xuống và xem ngoại tuyến",
        content: "Tải xuống các bộ phim và chương trình yêu thích để xem khi không có kết nối internet."
      },
      {
        title: "Xem trên nhiều thiết bị",
        content: "Đăng nhập và xem nội dung trên nhiều thiết bị như TV, điện thoại, máy tính bảng."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn đăng ký VieON VIP",
        lienket: "huongdandangkyvieonvip.html"
      },
      {
        title: "Cách sử dụng VieON VIP hiệu quả",
        lienket: "cachsudungvieonvip.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackvieon1.jpeg",
      "./Image/feedbackvieon2.jpeg"
    ]
  }
,
{
    name: "Adobe Full App (1TB dung lượng)",
    image: "./Image/adobe.png",
    price: "560k/năm",
    image1: "./Image/adobe-image1.png",
    giagoc: "1.000k/năm",
    tinhnang: [
      {
        title: "Truy cập đầy đủ các ứng dụng Adobe",
        content: "Bao gồm Photoshop, Illustrator, Premiere Pro, After Effects và nhiều ứng dụng khác."
      },
      {
        title: "1TB dung lượng lưu trữ đám mây",
        content: "Lưu trữ và truy cập tài liệu của bạn từ bất kỳ đâu với 1TB dung lượng lưu trữ đám mây."
      },
      {
        title: "Cập nhật tự động",
        content: "Luôn nhận được các phiên bản mới nhất của tất cả các ứng dụng Adobe mà không phải trả thêm phí."
      },
      {
        title: "Hỗ trợ kỹ thuật 24/7",
        content: "Nhận hỗ trợ kỹ thuật 24/7 để giải quyết bất kỳ vấn đề nào bạn gặp phải."
      },
      {
        title: "Các bài học và hướng dẫn chi tiết",
        content: "Truy cập vào các bài học và hướng dẫn chi tiết để học cách sử dụng các công cụ Adobe hiệu quả."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn cài đặt Adobe Full App",
        lienket: "huongdancaidatadobefullapp.html"
      },
      {
        title: "Cách sử dụng các ứng dụng Adobe hiệu quả",
        lienket: "cachsudungadobeeffectively.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackadobe1.jpeg",
      "./Image/feedbackadobe2.jpeg"
    ]
  }
,
{
    name: "Duolingo Chính Chủ",
    image: "./Image/duolingo.png",
    price: "270k/năm",
    image1: "https://www.canva.com/pro/premium-content/",
    giagoc: "500k/năm",
    tinhnang: [
      {
        title: "Học ngoại ngữ không giới hạn",
        content: "Truy cập không giới hạn tất cả các bài học và tài liệu học tập trên Duolingo."
      },
      {
        title: "Không quảng cáo",
        content: "Trải nghiệm học tập không bị gián đoạn bởi quảng cáo."
      },
      {
        title: "Chế độ học ngoại tuyến",
        content: "Tải xuống các bài học và học ngoại ngữ mà không cần kết nối internet."
      },
      {
        title: "Theo dõi tiến độ học tập",
        content: "Xem báo cáo chi tiết về tiến độ học tập và cải thiện kỹ năng ngôn ngữ của bạn."
      },
      {
        title: "Truy cập bài kiểm tra cấp chứng chỉ",
        content: "Tham gia các bài kiểm tra và nhận chứng chỉ ngôn ngữ được công nhận."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn sử dụng Duolingo hiệu quả",
        lienket: "huongdansudungduolingohieuqua.html"
      },
      {
        title: "Các mẹo học ngoại ngữ với Duolingo",
        lienket: "meohocngoainguvoiduolingo.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackduolingo1.jpeg",
      "./Image/feedbackduolingo2.jpeg"
    ]
  }
,
{
    name: "Spotify 6 tháng",
    image: "./Image/spotify.png",
    price: "140k/6 tháng",
    image1: "https://www.canva.com/pro/premium-content/",
    giagoc: "300k/6 tháng",
    tinhnang: [
      {
        title: "Nghe nhạc không quảng cáo",
        content: "Tận hưởng âm nhạc mà không bị gián đoạn bởi quảng cáo."
      },
      {
        title: "Tải nhạc offline",
        content: "Tải các bài hát yêu thích và nghe mà không cần kết nối internet."
      },
      {
        title: "Chất lượng âm thanh cao",
        content: "Trải nghiệm âm nhạc với chất lượng âm thanh cao nhất."
      },
      {
        title: "Playlist và thư viện cá nhân",
        content: "Tạo và quản lý các playlist và thư viện âm nhạc của riêng bạn."
      },
      {
        title: "Phát nhạc trên nhiều thiết bị",
        content: "Nghe nhạc trên nhiều thiết bị như điện thoại, máy tính, và loa thông minh."
      }
    ],
    baohanh: [
      "Bảo hành trong suốt thời gian đăng ký 1 đổi 1 nếu có lỗi trong thời gian sử dụng",
      "Nâng cấp trong 5-15 phút",
      "Hỗ trợ kỹ thuật 24/7",
      "Hướng dẫn sử dụng chi tiết",
      "Miễn phí cập nhật phần mềm",
      "Miễn phí cài đặt và hướng dẫn sử dụng",
      "Hỗ trợ trực tuyến qua Teamview, Ultraview"
    ],
    lienkethuongdan: [
      {
        title: "Hướng dẫn sử dụng Spotify hiệu quả",
        lienket: "huongdansudungspotifyhieuqua.html"
      },
      {
        title: "Các mẹo tạo playlist trên Spotify",
        lienket: "meotaoplaylistspotify.html"
      }
    ],
    imagefeedback: [
      "./Image/feedbackspotify1.jpeg",
      "./Image/feedbackspotify2.jpeg"
    ]
  }
];

export default services;
