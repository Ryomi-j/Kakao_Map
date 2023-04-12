import styled from "@emotion/styled";

const SearchLocation = () => {
	return (
		<Container>
			<Form>
				<Input value={""} onChange={() => {}} />
			</Form>
			<List>
				{Array.from({ length: 50 }).map((item, idx) => {
					return <Item key={idx}>지역</Item>;
				})}
			</List>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	z-index: 1;
	height: 100%;
	background: white;
	opacity: 0.8;
	overflow-y: auto; /* 세로 스크롤 생성 */
`;

const Form = styled.form`
	display: flex;
	position: sticky;
	top: 0;
`;

const Input = styled.input`
	width: 100%;
	min-width: 200px;
	padding: 8px;
	border: 1px solid #c0c0c0;
`;

const List = styled.ul`
	list-styles: none;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	display: flex;
	flex-direction: column;
	padding: 8px;
	border-bottom: 1px dashed #d2d2d2;
    cursor: pointer;

	&:hover {
		background-color: #d2d2d2;
		opacity: 1;
		transition: background-color 0s;
	}
`;

export default SearchLocation;
