"use client";
import { FaDiscord, FaFacebookSquare } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex flex-col bg-white rounded-lg p-4 gap-4">
      <h1 className="font-bold text-xl">Xin chào mọi người 👋</h1>
      <p>
        Chào mừng đến với trang web hỗ trợ người chơi Days Bygone - trò chơi
        hành động hấp dẫn nơi bạn phải bảo vệ lâu đài khỏi làn sóng kẻ thù không
        ngừng. Trang web của chúng tôi cung cấp các công cụ tính toán tiên tiến
        giúp bạn tối ưu hóa chiến lược, nâng cấp kỹ năng và tăng cường sức mạnh
        cho các anh hùng. Hãy khám phá và sử dụng các công cụ của chúng tôi để
        chiến thắng trong thế giới Days Bygone! 🏰🛡️
      </p>
      <p>
        Ứng dụng này nhẹ và chạy hoàn toàn ở phía máy khách của bạn, đảm bảo
        trải nghiệm liền mạch mà không ảnh hưởng đến bảo mật (không có dữ liệu
        người dùng nào được lưu trữ). Nó cũng hỗ trợ đầy đủ PWA, bạn có thể cài
        đặt nó để sử dụng ngoại tuyến.
      </p>
      <p>
        Nếu bạn tìm thấy bất kỳ lỗi nào hoặc có bất kỳ ý tưởng cải tiến tính
        năng nào, vui lòng cho tôi biết bằng cách{" "}
        <a className="text-blue-600" href="#">
          báo cáo sự cố
        </a>
        .
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        <Button color="blue" className="w-[160px] flex items-center gap-2">
          <FaFacebookSquare className="w-5 h-5" />
          Box chat
        </Button>
        <Button color="purple" className="w-[160px] flex items-center gap-2">
          <FaDiscord className="w-5 h-5" /> Discord
        </Button>
        <Button variant="outlined" className="w-[160px]">
          Ủng hộ cafe ☕️
        </Button>
      </div>
      <div className="flex items-center flex-wrap">
        Built with ❤️ and ☕️ by{" "}
        <a
          className="text-blue-600 ml-2"
          href="https://www.facebook.com/lnkhoa1205"
        >
          Luong Khoa
        </a>
      </div>
    </main>
  );
}
