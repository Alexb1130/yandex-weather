import { Button, Form, Input, InputNumber } from "antd";
import { SavedGeolocation } from "../slice";

interface Props {
    onAdd: (values: SavedGeolocation) => void
}

export const AddGeo = ({ onAdd }: Props) => (
    <Form
        onFinish={onAdd}
        layout="inline"
        style={{ marginTop: 16 }}
        initialValues={{ label: 'сан тропэээ', lat: 1, lon: 1 }}
    >
        <Form.Item
            name="label"
            rules={[{ required: true, message: 'Введите имя' }]}
            style={{ maxWidth: 165 }}
        >
            <Input addonBefore='имя' />
        </Form.Item>
        <Form.Item
            name="lat"
            style={{ maxWidth: 130 }}
        >
            <InputNumber addonBefore='ш' min={1} max={1000000} />
        </Form.Item>
        <Form.Item
            name="lon"
            style={{ maxWidth: 130 }}
        >
            <InputNumber addonBefore='д' min={1} max={1000000} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" type="primary">Добавить</Button>
        </Form.Item>
    </Form>   
)