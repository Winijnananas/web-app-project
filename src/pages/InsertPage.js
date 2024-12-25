import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import '../css/TaxInvoiceForm.css'

export default function InsertPage() {
  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Full TAX invoice request</h2>
          <div className="header-icons">
            <span>✕</span>
            <span>✓</span>
          </div>
        </div>

        <form className="tax-form">
          <div className="form-group">
            <label>Create date</label>
            <input type="date" defaultValue="2024-12-25" />
          </div>

          <div className="form-group">
            <label>Order no</label>
            <input type="text" defaultValue="SO-202409076" />
          </div>

          <div className="form-group">
            <label>Order date</label>
            <input type="date" defaultValue="2024-10-16" />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input type="number" defaultValue="500.00" />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="ชื่อที่ต้องการแสดงในใบกำกับ" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="ที่อยู่ที่ต้องการแสดงในใบกำกับ"></textarea>
          </div>

          <div className="form-row">
            <div className="checkbox-group">
              <input type="checkbox" id="headOffice" defaultChecked />
              <label htmlFor="headOffice">Head office</label>
            </div>
            <div className="form-group branch-group">
              <label>Branch no</label>
              <input type="text" placeholder="00000" />
            </div>
          </div>

          <div className="form-group">
            <label>Tax ID</label>
            <input type="text" placeholder="เลขประจำตัวผู้เสียภาษีอากร" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="sample@mail.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="099 999 9999" />
          </div>

          <div className="form-group">
            <label>TAX Invoice</label>
            <input type="text" placeholder="ไม่พบข้อมูล" disabled />
          </div>
        </form>
      </div>
    </div>
  );
}