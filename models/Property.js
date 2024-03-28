import { Schema, models, model } from "mongoose";

// 부동산(Property) 모델의 스키마 정의
const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // 사용자(User) 모델과의 관계 설정
      required: true, // 소유자 필수 입력
    },
    name: {
      type: String,
      required: true, // 부동산 이름 필수 입력
    },
    type: {
      type: String,
      required: true, // 부동산 유형 필수 입력
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true, // 침실 수 필수 입력
    },
    baths: {
      type: Number,
      required: true, // 욕실 수 필수 입력
    },
    square_feet: {
      type: Number,
      required: true, // 면적(평방 피트) 필수 입력
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
    },
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false, // 특색 있는 부동산 여부, 기본값은 false
    },
  },
  {
    timestamps: true, // createdAt 및 updatedAt 필드 자동 생성
  }
);

// 이미 models 객체에 Property 모델이 정의되어 있는지 확인하고, 그렇지 않은 경우 정의함
const Property = models.Property || model("Property", PropertySchema);
export default Property;
