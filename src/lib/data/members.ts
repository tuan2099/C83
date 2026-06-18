/* Central source of truth for the C83 Group member companies.
   Imported by both the members list page and the dynamic detail route so the
   11 companies are defined exactly once. */

export type Member = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  sector: string;
  description: string;
  services: string[];
};

export const MEMBERS: Member[] = [
  {
    slug: "c83-materials",
    code: "C83-01",
    name: "C83 Materials",
    tagline: "Vật liệu hoàn thiện cao cấp",
    sector: "Vật liệu hoàn thiện",
    description:
      "C83 Materials cung ứng vật liệu hoàn thiện cao cấp cho các công trình quy mô lớn, từ đá ốp lát, gạch, sàn gỗ đến vật liệu trang trí nhập khẩu. Đơn vị là đầu mối tuyển chọn, kiểm định và phân phối những dòng sản phẩm đạt chuẩn quốc tế. Năng lực cung ứng ổn định giúp đảm bảo tiến độ và chất lượng cho toàn hệ sinh thái.",
    services: [
      "Cung ứng đá ốp lát & gạch cao cấp",
      "Sàn gỗ và vật liệu trang trí nhập khẩu",
      "Tư vấn lựa chọn vật liệu hoàn thiện",
      "Kiểm định chất lượng & bảo hành vật liệu",
    ],
  },
  {
    slug: "c83-audiovision",
    code: "C83-02",
    name: "C83 AudioVision",
    tagline: "Hệ thống âm thanh – trình chiếu",
    sector: "Âm thanh – Trình chiếu",
    description:
      "C83 AudioVision thiết kế và lắp đặt hệ thống âm thanh, hình ảnh chuyên nghiệp cho hội trường, sự kiện và không gian thương mại. Đội ngũ kỹ thuật làm chủ các giải pháp AV hiện đại, tối ưu trải nghiệm nghe nhìn. Mỗi dự án được hiệu chỉnh riêng theo đặc thù không gian và nhu cầu vận hành.",
    services: [
      "Thiết kế hệ thống âm thanh hội trường",
      "Lắp đặt màn hình & thiết bị trình chiếu",
      "Tích hợp giải pháp AV trọn gói",
      "Bảo trì & vận hành hệ thống sự kiện",
    ],
  },
  {
    slug: "c83-hardware",
    code: "C83-03",
    name: "C83 Hardware",
    tagline: "Phụ kiện cửa & kính nhập khẩu",
    sector: "Phụ kiện cửa & kính",
    description:
      "C83 Hardware chuyên phân phối phụ kiện cửa và kính nhập khẩu: bản lề, tay nắm, khóa và hệ phụ kiện đồng bộ. Sản phẩm được tuyển chọn từ các thương hiệu uy tín, đảm bảo độ bền và tính thẩm mỹ. Đơn vị đồng hành cùng nhà thầu từ khâu tư vấn kỹ thuật đến lắp đặt hoàn thiện.",
    services: [
      "Phân phối bản lề & tay nắm nhập khẩu",
      "Hệ phụ kiện cửa kính đồng bộ",
      "Khóa và phụ kiện an ninh",
      "Tư vấn kỹ thuật & hỗ trợ lắp đặt",
    ],
  },
  {
    slug: "c83-aquatech",
    code: "C83-04",
    name: "C83 AquaTech",
    tagline: "Hệ thống nước sạch & nước nóng",
    sector: "Nước sạch & nước nóng",
    description:
      "C83 AquaTech cung cấp giải pháp nước sạch và nước nóng cho công trình dân dụng lẫn công nghiệp. Từ hệ thống lọc nước đầu nguồn đến bình nóng lạnh công suất lớn, đơn vị đảm bảo nguồn nước an toàn và ổn định. Các hệ thống được thiết kế tiết kiệm năng lượng và dễ vận hành lâu dài.",
    services: [
      "Hệ thống lọc nước đầu nguồn",
      "Bình nóng lạnh công nghiệp",
      "Xử lý nước cấp & nước thải",
      "Bảo trì & vận hành hệ thống nước",
    ],
  },
  {
    slug: "c83-construction",
    code: "C83-05",
    name: "C83 Construction",
    tagline: "Tổng thầu xây dựng & thi công",
    sector: "Xây dựng & thi công",
    description:
      "C83 Construction là tổng thầu thi công các công trình dân dụng và công nghiệp với năng lực kiểm chứng qua hàng trăm dự án. Đơn vị quản lý trọn vẹn chuỗi thi công từ phần thô đến hoàn thiện, đảm bảo tiến độ và an toàn lao động. Hệ thống quản trị dự án chuyên nghiệp giúp tối ưu chi phí cho chủ đầu tư.",
    services: [
      "Tổng thầu thi công công trình",
      "Thi công phần thô & hoàn thiện",
      "Quản lý dự án & tiến độ",
      "Giám sát an toàn & chất lượng",
    ],
  },
  {
    slug: "c83-ai-sales",
    code: "C83-06",
    name: "C83 AI Sales",
    tagline: "Công nghệ & AI hỗ trợ bán hàng",
    sector: "Công nghệ & AI",
    description:
      "C83 AI Sales phát triển các giải pháp công nghệ và trí tuệ nhân tạo hỗ trợ bán hàng, chăm sóc khách hàng và vận hành. Nền tảng giúp tự động hóa quy trình, phân tích dữ liệu và nâng cao hiệu suất kinh doanh. Công nghệ được ứng dụng xuyên suốt hệ sinh thái để tạo lợi thế cạnh tranh.",
    services: [
      "Tự động hóa quy trình bán hàng",
      "Chatbot & trợ lý AI chăm sóc khách hàng",
      "Phân tích dữ liệu & dự báo kinh doanh",
      "Tư vấn chuyển đổi số doanh nghiệp",
    ],
  },
  {
    slug: "c83-interior",
    code: "C83-07",
    name: "C83 Interior",
    tagline: "Thiết kế & thi công nội thất",
    sector: "Vật liệu hoàn thiện",
    description:
      "C83 Interior cung cấp dịch vụ thiết kế và thi công nội thất trọn gói cho nhà ở, văn phòng và không gian thương mại. Đội ngũ kiến trúc sư kết hợp thẩm mỹ với công năng, tạo nên những không gian sống và làm việc đẳng cấp. Quy trình khép kín từ ý tưởng đến bàn giao giúp kiểm soát chất lượng và tiến độ.",
    services: [
      "Thiết kế nội thất theo yêu cầu",
      "Thi công & lắp đặt trọn gói",
      "Sản xuất đồ gỗ nội thất",
      "Tư vấn phong cách & vật liệu",
    ],
  },
  {
    slug: "c83-logistics",
    code: "C83-08",
    name: "C83 Logistics",
    tagline: "Vận chuyển & kho vận chuyên nghiệp",
    sector: "Xây dựng & thi công",
    description:
      "C83 Logistics đảm nhiệm vận chuyển và kho vận chuyên nghiệp cho toàn bộ hàng hóa, vật liệu của hệ sinh thái. Mạng lưới kho bãi và đội xe được tổ chức bài bản, đảm bảo hàng đến công trình đúng thời điểm. Giải pháp logistics tối ưu giúp giảm chi phí và rủi ro trong chuỗi cung ứng.",
    services: [
      "Vận chuyển vật liệu & thiết bị",
      "Quản lý kho bãi chuyên nghiệp",
      "Tối ưu chuỗi cung ứng",
      "Giao nhận tận chân công trình",
    ],
  },
  {
    slug: "c83-smart-home",
    code: "C83-09",
    name: "C83 Smart Home",
    tagline: "Giải pháp nhà thông minh",
    sector: "Nước sạch & nước nóng",
    description:
      "C83 Smart Home mang đến giải pháp nhà thông minh tích hợp chiếu sáng, an ninh, điều hòa và thiết bị gia dụng. Hệ thống được điều khiển tập trung, tối ưu tiện nghi và tiết kiệm năng lượng cho người dùng. Đơn vị tư vấn và lắp đặt theo từng nhu cầu, từ căn hộ đến biệt thự cao cấp.",
    services: [
      "Hệ thống điều khiển nhà thông minh",
      "Giải pháp an ninh & giám sát",
      "Tự động hóa chiếu sáng & điều hòa",
      "Tư vấn & lắp đặt trọn gói",
    ],
  },
  {
    slug: "c83-trading",
    code: "C83-10",
    name: "C83 Trading",
    tagline: "Thương mại & phân phối quốc tế",
    sector: "Công nghệ & AI",
    description:
      "C83 Trading kết nối hệ sinh thái với mạng lưới đối tác và nhà cung cấp toàn cầu thông qua hoạt động thương mại, xuất nhập khẩu. Đơn vị đảm nhiệm phân phối hàng hóa, đàm phán nguồn cung và mở rộng quan hệ quốc tế. Năng lực thương mại linh hoạt giúp tập đoàn tiếp cận sản phẩm và công nghệ hàng đầu.",
    services: [
      "Xuất nhập khẩu hàng hóa",
      "Phân phối sản phẩm chính hãng",
      "Kết nối đối tác quốc tế",
      "Đàm phán & quản lý nguồn cung",
    ],
  },
  {
    slug: "c83-investment",
    code: "C83-11",
    name: "C83 Investment",
    tagline: "Đầu tư & phát triển dự án",
    sector: "Xây dựng & thi công",
    description:
      "C83 Investment phụ trách hoạt động đầu tư và phát triển dự án của tập đoàn, từ nghiên cứu cơ hội đến triển khai và vận hành. Đơn vị quản lý danh mục đầu tư với tiêu chí minh bạch, hiệu quả và bền vững. Nguồn lực tài chính vững mạnh là nền tảng cho sự phát triển dài hạn của cả hệ sinh thái.",
    services: [
      "Nghiên cứu & phát triển dự án",
      "Quản lý danh mục đầu tư",
      "Huy động & cơ cấu nguồn vốn",
      "Phát triển quỹ đất & bất động sản",
    ],
  },
];

export const MEMBERS_BY_SLUG: Record<string, Member> = MEMBERS.reduce(
  (acc, m) => {
    acc[m.slug] = m;
    return acc;
  },
  {} as Record<string, Member>,
);
