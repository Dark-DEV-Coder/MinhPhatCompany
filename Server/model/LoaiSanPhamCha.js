import mongoose from "mongoose";
import { TrangThaiTonTai } from "../constant.js";
const { Schema } = mongoose;

const LoaiSPChaSchema = new Schema(
    {
        MaLSPCha: {
            type: String,
            unique: true,
            required: true,
        },
        TenLoai: {
            type: String,
            required: true,
        },
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiTonTai),
            default: TrangThaiTonTai.ChuaXoa,
        },
    },
    { timestamps: true }
)

export default mongoose.model("loaisanphamchas", LoaiSPChaSchema);
