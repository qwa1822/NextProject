import { Schema, model, models } from "mongoose";

// 사용자(User) 모델의 스키마 정의
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "이미 등록된 이메일입니다."], // 중복 이메일 방지
      required: [true, "이메일은 필수입니다."], // 이메일 필수 입력
    },
    username: {
      type: String,
      required: [true, "사용자명은 필수입니다."], // 사용자명 필수 입력
    },
    images: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true, // createdAt 및 updatedAt 필드 자동 생성
  }
);

// 이미 models 객체에 User 모델이 정의되어 있는지 확인하고, 그렇지 않은 경우 정의함
const User = models.User || model("User", UserSchema);

export default User;
