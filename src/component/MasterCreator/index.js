import SoftBox from "assets/components/SoftBox";
import SoftButton from "assets/components/SoftButton";
import SoftInput from "assets/components/SoftInput";
import SoftInputWithLabel from "assets/components/SoftInput/SoftInputWithLabel";
import dynamicGeneratedData from "assets/data/dynamicGeneratedData";
import Table from "assets/examples/Tables/Table";
import { useEffect, useState } from "react";
import { Card, Grid, Switch, TextField, Icon } from '@mui/material'
import './index.css'

function MasterCreator() {
    const [todos, setTodos] = useState([{ name: "", type: "" }]);
    const [todoList, setTodoList] = useState([]);
    const [tableData, setTableData] = useState({ columns: [], rows: [] })

    const handleTodoChange = (e, i) => {
        const field = e.target.name;
        const newTodos = [...todos];
        newTodos[i][field] = e.target.value;
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        setTodos([...todos, { name: "", type: "" }]);
    };

    const handleDeleteTodo = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };

    useEffect(() => {
        if (todoList?.length > 0) {
            const firstData = todoList[0];
            const { columns } = dynamicGeneratedData(Object.keys(firstData), []);
            setTableData({ columns: columns, rows: todoList });
        }
    }, [todoList])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(todos);
        if (todos?.length > 0) {
            if (todoList?.length > 0) {
                setTodoList([...todoList, ...todos]);
            } else {
                setTodoList(todos);
            }
        }
        setTodos([{ name: "", type: "" }]);
    };

    return (
        <SoftBox mt={6} p={3}>
            <form onSubmit={handleSubmit}>
                {todos?.map((todo, index) => (
                    <div key={index}>
                        <SoftBox mb={3}>
                            <Grid mt={1} container spacing={1}>
                                <Grid item xs={3}>
                                    <SoftInputWithLabel
                                        placeholder="Name"
                                        label={{ text: 'Name', direction: 'none' }}
                                        value={todo.name}
                                        size="medium"
                                        onChange={(e) => handleTodoChange(e, index)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <SoftInputWithLabel
                                        type={'dropdown'}
                                        name={"name"}
                                        value={todo.name}
                                        size="medium"
                                        optionsList={[
                                            {
                                                label: 'string',
                                                value: 'String',
                                                disabled: false,
                                            }, {
                                                label: 'number',
                                                value: 'number',
                                                disabled: false,
                                            },
                                            {
                                                label: 'Boolean',
                                                value: 'Boolean',
                                                disabled: false,
                                            },
                                        ]}
                                        label={{ text: 'type', direction: 'none' }}
                                        onChange={(e) => handleTodoChange(e, index)}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <SoftInputWithLabel
                                        placeholder="Default Value"
                                        label={{ text: 'Default Value', direction: 'none' }}
                                        value={todo.default_value}
                                        size="medium"
                                        onChange={(e) => handleTodoChange(e, index)}
                                        required
                                    />
                                </Grid>
                                {
                                    todos?.length > 1 &&
                                    <Grid item xs={2} >
                                        <SoftBox sx={{
                                            marginTop: '14px'
                                        }}>
                                            </SoftBox>
                                            <SoftBox
                                                className={'master-remove-button'}
                                                bgColor={"error"}
                                                variant={"gradient"}
                                                onClick={(e, val) => {
                                                    handleDeleteTodo(index)
                                                }}
                                                component={'button'}
                                                >
                                                <Icon sx={{ fontWeight: "bold" }}>delete</Icon>
                                                </SoftBox>
                                    </Grid>
                                }
                            </Grid>
                        </SoftBox>
                    </div>
                ))}
                <SoftButton color="info" type="button"
                    variant={"gradient"}
                    onClick={handleAddTodo}>
                    Add Todo
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                </SoftButton>
                <SoftButton color="info"
                    variant={"gradient"}
                    type="submit">Submit Todos 
                <Icon sx={{ fontWeight: "bold" }}>save</Icon>
                </SoftButton>
            </form>

            {todoList?.length > 0 &&
                (
                    <Card>
                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={tableData?.columns} rows={tableData?.rows} isLoading={false} />
                        </SoftBox>
                    </Card>
                )
            }
        </SoftBox>
    );
}

export default MasterCreator; 
