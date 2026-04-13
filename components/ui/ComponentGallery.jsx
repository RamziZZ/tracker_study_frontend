"use client";

import { useMemo, useState } from "react";
import { Badge } from "./badge";
import { Button } from "./button";
import { TextField } from "./input";
import { IconButton } from "./IconButton";
import {
  IconBook,
  IconHome,
  IconChevronDown,
  IconCalendar,
  IconMail,
  IconTelegram,
  IconWhatsapp,
  IconTiktok,
  IconInstagram,
} from "./icons";

export default function ComponentGallery() {
  const [form, setForm] = useState({
    name: "",
    status: "",
    email: "",
  });

  const results = useMemo(() => {
    if (!form.name && !form.status && !form.email) return null;

    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
        <p className="text-sm font-semibold text-slate-200">Form Value (preview)</p>
        <pre className="mt-2 text-xs text-slate-100">
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>
    );
  }, [form]);

  return (
    <div className="space-y-10 p-6">
      <section className="grid gap-4 rounded-2xl border border-dashed border-slate-600 p-6">
        <h2 className="text-lg font-semibold text-white">Label / Badge styles</h2>
        <div className="flex flex-col gap-3">
          <Badge variant="primary">FullTime</Badge>
          <Badge variant="dark">FullTime</Badge>
          <Badge variant="primary" icon={IconBook}>
            FullTime
          </Badge>
          <Badge variant="outline">FullTime</Badge>
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-dashed border-slate-600 p-6">
        <h2 className="text-lg font-semibold text-white">Button variants</h2>
        <div className="grid gap-3">
          <div className="flex flex-wrap gap-3">
            <Button>Isi Kuisioner</Button>
            <Button variant="outline">Isi Kuisioner</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button icon={IconBook}>Isi Kuisioner</Button>
            <Button icon={IconBook} variant="outline">
              Isi Kuisioner
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button icon={IconHome} variant="primary" />
            <Button icon={IconHome} variant="outline" />
            <Button icon={IconHome} variant="ghost" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-dashed border-slate-600 p-6">
        <h2 className="text-lg font-semibold text-white">Contact buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton icon={IconTelegram} label="Telegram" />
          <IconButton icon={IconWhatsapp} label="WhatsApp" />
          <IconButton icon={IconMail} label="Email" />
          <IconButton icon={IconTiktok} label="TikTok" />
          <IconButton icon={IconInstagram} label="Instagram" />
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-dashed border-slate-600 p-6">
        <h2 className="text-lg font-semibold text-white">Field components</h2>
        <div className="grid gap-4">
          <TextField
            label="Nama"
            placeholder="masukkan nama disini..."
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            variant="filled"
          />
          <TextField
            label="Status Kerja"
            placeholder="masukkan nama disini..."
            value={form.status}
            onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value }))}
            variant="filled"
            suffix={<IconChevronDown className="h-4 w-4" />}
          />
          <TextField
            label="Email"
            placeholder="masukkan nama disini..."
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            variant="outline"
            icon={IconCalendar}
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() =>
                setForm({
                  name: "",
                  status: "",
                  email: "",
                })
              }
              variant="outline"
            >
              Reset
            </Button>
            <Button
              onClick={() =>
                alert(
                  `Submit: ${JSON.stringify(form, null, 2)}`
                )
              }
            >
              Submit
            </Button>
          </div>
        </div>
        {results}
      </section>
    </div>
  );
}
