import { Router } from "express";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "tmp/" });

router.post("/admin/import/:entity", upload.single("file"), async (req, res) => {
  const { entity } = req.params;

  if (!req.file) {
    return res.status(400).json({ error: "Missing file upload." });
  }

  // TODO:
  // 1) Persist ImportJob record in DB.
  // 2) Parse CSV/XLSX by entity type.
  // 3) Validate rows and write ImportError records.
  // 4) Upsert entities and enqueue recalculation jobs.
  return res.status(202).json({ status: "queued", entity, file: req.file.filename });
});

export default router;
