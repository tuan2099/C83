/* Centralised NEWS content for the C83 Group news hub.
   Consumed by the list page (src/routes/news/index.tsx) and the dynamic
   detail page (src/routes/news/$slug.tsx). Slugs are URL-safe and stable. */

export type NewsCategory =
  | "Sự kiện"
  | "Dự án"
  | "Giải thưởng"
  | "Báo chí"
  | "Bản tin nội bộ";

export type NewsItem = {
  slug: string;
  date: string; // "DD.MM.2026"
  category: NewsCategory;
  title: string;
  excerpt: string;
  content: string[];
};

export const NEWS: NewsItem[] = [
  {
    slug: "ky-ket-hop-tac-chien-luoc-tap-doan-abc",
    date: "12.06.2026",
    category: "Sự kiện",
    title: "C83 Group ký kết hợp tác chiến lược với tập đoàn quốc tế ABC",
    excerpt:
      "Thỏa thuận mở ra cơ hội chuyển giao công nghệ và mở rộng chuỗi cung ứng vật liệu cao cấp trên toàn khu vực Đông Nam Á.",
    content: [
      "Ngày 12.06.2026, tại trụ sở chính ở Hà Nội, C83 Group chính thức ký kết thỏa thuận hợp tác chiến lược với tập đoàn quốc tế ABC — một trong những nhà cung ứng vật liệu và giải pháp công nghệ hàng đầu khu vực. Lễ ký kết có sự chứng kiến của ban lãnh đạo hai bên cùng đại diện các đối tác trong hệ sinh thái 11 công ty thành viên.",
      "Theo nội dung thỏa thuận, hai bên sẽ phối hợp chuyển giao công nghệ sản xuất, đồng phát triển danh mục vật liệu hoàn thiện cao cấp và mở rộng chuỗi cung ứng trên toàn khu vực Đông Nam Á. Đây là bước đi quan trọng giúp C83 Group rút ngắn thời gian đưa sản phẩm mới ra thị trường và nâng chuẩn chất lượng theo thông lệ quốc tế.",
      "Đại diện C83 Group khẳng định hợp tác này không chỉ gia tăng năng lực cung ứng mà còn củng cố vị thế của tập đoàn như một mắt xích đáng tin cậy trong các công trình quy mô lớn. Việc kết hợp thế mạnh của hai bên được kỳ vọng tạo ra giá trị bền vững cho khách hàng và đối tác.",
      "Trong giai đoạn tiếp theo, hai tập đoàn sẽ thành lập tổ công tác chung để triển khai lộ trình hợp tác cụ thể, từ đào tạo nhân sự kỹ thuật đến thí điểm các dòng sản phẩm đầu tiên ngay trong năm 2026.",
    ],
  },
  {
    slug: "khoi-cong-to-hop-thuong-mai-50-tang-ha-noi",
    date: "05.06.2026",
    category: "Dự án",
    title: "Khởi công tổ hợp thương mại 50 tầng tại trung tâm Hà Nội",
    excerpt:
      "Dự án quy mô lớn với tổng mức đầu tư hàng nghìn tỷ đồng, do hệ sinh thái C83 Group cung cấp giải pháp trọn gói từ vật liệu đến thi công.",
    content: [
      "C83 Group cùng các đối tác vừa tổ chức lễ khởi công tổ hợp thương mại cao 50 tầng tại khu vực trung tâm Hà Nội. Với tổng mức đầu tư hàng nghìn tỷ đồng, đây là một trong những dự án trọng điểm mà tập đoàn tham gia cung cấp giải pháp trọn gói từ vật liệu, phụ kiện đến thi công hoàn thiện.",
      "Phát huy thế mạnh của mô hình hệ sinh thái khép kín, các công ty thành viên sẽ đảm nhận đồng bộ nhiều hạng mục: vật liệu hoàn thiện cao cấp, hệ thống âm thanh — trình chiếu, phụ kiện cửa và kính, cùng hệ thống nước sạch. Sự phối hợp này giúp tối ưu tiến độ và bảo đảm tính nhất quán về chất lượng trên toàn công trình.",
      "Ban quản lý dự án cho biết công trình được thiết kế theo tiêu chuẩn xanh, ưu tiên vật liệu thân thiện môi trường và giải pháp tiết kiệm năng lượng. Khi hoàn thành, tổ hợp sẽ trở thành điểm nhấn thương mại — văn phòng hiện đại của khu vực.",
      "Theo kế hoạch, dự án sẽ được triển khai theo nhiều giai đoạn với các mốc tiến độ rõ ràng, hướng tới mục tiêu bàn giao đúng cam kết và bảo đảm an toàn lao động trong suốt quá trình thi công.",
    ],
  },
  {
    slug: "top-100-doanh-nghiep-tieu-bieu-viet-nam-2026",
    date: "28.05.2026",
    category: "Giải thưởng",
    title: "C83 Group nhận giải Top 100 doanh nghiệp tiêu biểu Việt Nam 2026",
    excerpt:
      "Sự ghi nhận cho năng lực quản trị, tăng trưởng bền vững và đóng góp tích cực cho ngành xây dựng trong nước.",
    content: [
      "C83 Group vinh dự được xướng tên trong danh sách Top 100 doanh nghiệp tiêu biểu Việt Nam 2026. Giải thưởng là sự ghi nhận cho năng lực quản trị chuyên nghiệp, tốc độ tăng trưởng bền vững và những đóng góp tích cực của tập đoàn cho ngành xây dựng và vật liệu trong nước.",
      "Hội đồng bình chọn đánh giá cao mô hình hệ sinh thái 11 công ty thành viên, cho phép C83 Group cung cấp giải pháp trọn gói và kiểm soát chất lượng xuyên suốt chuỗi giá trị. Đây cũng là yếu tố giúp tập đoàn duy trì sức cạnh tranh trong bối cảnh thị trường nhiều biến động.",
      "Đại diện tập đoàn chia sẻ giải thưởng là động lực để C83 Group tiếp tục đầu tư vào con người, công nghệ và quản trị minh bạch. Mục tiêu lâu dài là mang lại giá trị thực cho khách hàng, đối tác và cộng đồng.",
      "Cùng với nhiều chứng nhận đã đạt được trước đó, danh hiệu lần này củng cố uy tín thương hiệu C83 Group trên thị trường và mở ra thêm cơ hội hợp tác với các đối tác trong và ngoài nước.",
    ],
  },
  {
    slug: "bao-dau-tu-c83-group-dan-dau-vat-lieu-xanh",
    date: "20.05.2026",
    category: "Báo chí",
    title: "Báo Đầu tư: C83 Group dẫn đầu xu hướng vật liệu xanh",
    excerpt:
      "Bài viết phân tích chiến lược tiên phong của tập đoàn trong việc đưa vật liệu thân thiện môi trường vào các công trình quy mô lớn.",
    content: [
      "Trong số mới nhất, Báo Đầu tư đã đăng tải bài phân tích chuyên sâu về chiến lược vật liệu xanh của C83 Group, ghi nhận tập đoàn là một trong những đơn vị tiên phong đưa vật liệu thân thiện môi trường vào các công trình quy mô lớn tại Việt Nam.",
      "Bài viết chỉ ra rằng việc ưu tiên vật liệu xanh không chỉ đáp ứng yêu cầu ngày càng cao về phát triển bền vững mà còn tạo lợi thế cạnh tranh rõ rệt. Khách hàng và chủ đầu tư hiện đại đặc biệt quan tâm đến hiệu quả năng lượng và dấu chân môi trường của công trình.",
      "Theo phân tích, hệ sinh thái khép kín của C83 Group cho phép tập đoàn kiểm soát nguồn gốc và chất lượng vật liệu, đồng thời tối ưu chi phí và tiến độ. Đây là nền tảng để tập đoàn nhân rộng các giải pháp xanh trên nhiều dự án.",
      "C83 Group cho biết sẽ tiếp tục mở rộng danh mục vật liệu thân thiện môi trường và hợp tác với các đối tác công nghệ để hiện thực hóa cam kết phát triển bền vững theo chuẩn ESG.",
    ],
  },
  {
    slug: "ban-tin-noi-bo-thang-6-vinh-danh-nhan-su-q2-2026",
    date: "15.06.2026",
    category: "Bản tin nội bộ",
    title: "Bản tin nội bộ tháng 6: Vinh danh nhân sự xuất sắc Q2/2026",
    excerpt:
      "Tổng kết hoạt động quý II và tôn vinh những cá nhân, tập thể có thành tích nổi bật trên toàn hệ sinh thái 11 công ty thành viên.",
    content: [
      "Bản tin nội bộ tháng 6 của C83 Group tổng kết những hoạt động nổi bật trong quý II/2026 và trang trọng vinh danh các cá nhân, tập thể có thành tích xuất sắc trên toàn hệ sinh thái 11 công ty thành viên.",
      "Quý II ghi nhận nhiều dấu ấn quan trọng: ký kết hợp tác chiến lược, khởi công dự án trọng điểm và mở rộng mạng lưới showroom. Những kết quả này là thành quả chung của tinh thần phối hợp và nỗ lực không ngừng của đội ngũ.",
      "Trong đợt vinh danh lần này, ban lãnh đạo gửi lời tri ân tới các nhân sự đã thể hiện tinh thần trách nhiệm, sáng tạo và cam kết với giá trị cốt lõi của tập đoàn. Đây là nguồn cảm hứng để toàn hệ thống cùng tiến về phía trước.",
      "Bước sang quý III, C83 Group đặt mục tiêu tiếp tục nâng cao chất lượng dịch vụ, đẩy mạnh đào tạo nội bộ và xây dựng môi trường làm việc gắn kết, đề cao đổi mới và phát triển bền vững.",
    ],
  },
  {
    slug: "khai-truong-showroom-vat-lieu-hoan-thien-da-nang",
    date: "08.05.2026",
    category: "Sự kiện",
    title: "C83 Group khai trương showroom vật liệu hoàn thiện tại Đà Nẵng",
    excerpt:
      "Không gian trải nghiệm hiện đại, mang đến cho khách hàng miền Trung giải pháp vật liệu hoàn thiện cao cấp ngay tại địa phương.",
    content: [
      "C83 Group vừa khai trương showroom vật liệu hoàn thiện tại Đà Nẵng, đánh dấu bước mở rộng hiện diện của tập đoàn tại thị trường miền Trung. Showroom được thiết kế như một không gian trải nghiệm hiện đại, nơi khách hàng có thể trực tiếp cảm nhận chất lượng sản phẩm.",
      "Tại đây, khách hàng và đối tác được tư vấn giải pháp vật liệu hoàn thiện cao cấp ngay tại địa phương, rút ngắn khoảng cách giữa nhu cầu và sản phẩm. Đội ngũ chuyên gia của C83 Group sẵn sàng đồng hành từ khâu lựa chọn vật liệu đến triển khai thực tế.",
      "Việc khai trương showroom thể hiện cam kết của tập đoàn trong việc đưa sản phẩm và dịch vụ đến gần hơn với khách hàng tại các vùng kinh tế trọng điểm. Miền Trung được đánh giá là thị trường giàu tiềm năng với nhiều dự án đang được triển khai.",
      "Trong thời gian tới, C83 Group dự kiến tiếp tục phát triển mạng lưới showroom và điểm trải nghiệm trên cả nước, nhằm phục vụ khách hàng tốt hơn và lan tỏa giá trị thương hiệu.",
    ],
  },
  {
    slug: "ban-giao-he-thong-av-trung-tam-hoi-nghi-quoc-gia",
    date: "30.04.2026",
    category: "Dự án",
    title: "Bàn giao hệ thống AV cho Trung tâm hội nghị quốc gia",
    excerpt:
      "Hệ thống âm thanh – trình chiếu chuẩn quốc tế được lắp đặt và vận hành thành công, đáp ứng các sự kiện tầm cỡ quốc gia.",
    content: [
      "C83 Group đã hoàn tất lắp đặt và bàn giao hệ thống âm thanh — trình chiếu (AV) cho Trung tâm hội nghị quốc gia. Hệ thống đạt chuẩn quốc tế, được vận hành ổn định và sẵn sàng phục vụ các sự kiện tầm cỡ quốc gia.",
      "Dự án đòi hỏi độ chính xác cao về kỹ thuật, từ thiết kế hệ thống, lựa chọn thiết bị đến tinh chỉnh âm thanh và hình ảnh cho từng không gian. Đội ngũ kỹ thuật của tập đoàn đã phối hợp chặt chẽ với ban quản lý để bảo đảm chất lượng và tiến độ.",
      "Theo đại diện C83 Group, việc bàn giao thành công khẳng định năng lực triển khai các hệ thống AV phức tạp cho công trình công cộng quy mô lớn. Đây cũng là minh chứng cho thế mạnh chuyên môn của các công ty thành viên trong hệ sinh thái.",
      "Sau khi đưa vào vận hành, hệ thống sẽ được đội ngũ kỹ thuật theo dõi và bảo trì định kỳ, bảo đảm hiệu suất ổn định cho các sự kiện quan trọng trong tương lai.",
    ],
  },
  {
    slug: "thuong-hieu-vang-2026-nam-thu-5-lien-tiep",
    date: "22.04.2026",
    category: "Giải thưởng",
    title: "Thương hiệu Vàng 2026: C83 Group được vinh danh năm thứ 5 liên tiếp",
    excerpt:
      "Năm thứ năm liên tiếp khẳng định uy tín thương hiệu và chất lượng sản phẩm – dịch vụ của tập đoàn trên thị trường.",
    content: [
      "C83 Group tiếp tục được vinh danh tại giải thưởng Thương hiệu Vàng 2026 — năm thứ năm liên tiếp tập đoàn góp mặt trong danh sách những thương hiệu uy tín. Đây là dấu mốc khẳng định sự bền bỉ và nhất quán trong chiến lược xây dựng thương hiệu.",
      "Giải thưởng phản ánh niềm tin của khách hàng và đối tác đối với chất lượng sản phẩm — dịch vụ của C83 Group. Trong suốt nhiều năm, tập đoàn kiên định với cam kết về chất lượng, minh bạch và trách nhiệm với cộng đồng.",
      "Theo ban lãnh đạo, việc được vinh danh liên tục là kết quả của quá trình đầu tư nghiêm túc vào quản trị, công nghệ và con người. Đồng thời, đó cũng là lời nhắc nhở về trách nhiệm gìn giữ và phát triển giá trị thương hiệu.",
      "C83 Group cho biết sẽ tiếp tục nâng cao trải nghiệm khách hàng và mở rộng danh mục giải pháp, hướng tới mục tiêu trở thành thương hiệu dẫn đầu trong lĩnh vực vật liệu và xây dựng.",
    ],
  },
  {
    slug: "vnexpress-ai-thay-doi-cach-nganh-xay-dung-ban-hang",
    date: "14.04.2026",
    category: "Báo chí",
    title: "VnExpress: AI thay đổi cách ngành xây dựng bán hàng",
    excerpt:
      "Phóng sự về việc ứng dụng công nghệ AI trong tư vấn và bán hàng, với C83 Group là một trong những đơn vị tiên phong tại Việt Nam.",
    content: [
      "VnExpress vừa đăng tải phóng sự về làn sóng ứng dụng trí tuệ nhân tạo (AI) trong ngành xây dựng và vật liệu, trong đó C83 Group được nhắc đến như một trong những đơn vị tiên phong tại Việt Nam trong việc đưa AI vào tư vấn và bán hàng.",
      "Bài viết mô tả cách công nghệ AI giúp đội ngũ kinh doanh hiểu rõ nhu cầu khách hàng, đề xuất giải pháp phù hợp và rút ngắn quy trình tư vấn. Nhờ đó, trải nghiệm khách hàng được cá nhân hóa và hiệu quả vận hành được cải thiện đáng kể.",
      "Theo phân tích, việc tích hợp AI vào quy trình bán hàng phản ánh tư duy đổi mới liên tục của C83 Group. Công nghệ không thay thế con người mà hỗ trợ đội ngũ ra quyết định nhanh hơn và chính xác hơn.",
      "Đại diện tập đoàn cho biết sẽ tiếp tục đầu tư vào nền tảng công nghệ và dữ liệu, nhằm nâng cao chất lượng dịch vụ và mở rộng ứng dụng AI trên toàn hệ sinh thái 11 công ty thành viên.",
    ],
  },
];

export const NEWS_BY_SLUG: Record<string, NewsItem> = Object.fromEntries(
  NEWS.map((item) => [item.slug, item]),
);
