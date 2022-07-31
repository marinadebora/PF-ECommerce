
  import Swal from "sweetalert2";
  import { useState } from "react";
  import { useRouter } from "next/router";
  import { useSelector, useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { getDetail } from "../../redux/actions/products";
  import { getAllCategories } from "../../redux/actions/categories";
  import axios from "axios";
  import { BASEURL } from "../../redux/actions/products";
  import { formValidations } from "./formValidations";
  import { configAxios } from "../../utils/axiosConfig";
  
  export default function ProductForm({ id }) {
    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [imgFile, setImgFile] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
  
    const [product, setProduct] = useState({
      name: "",
      description: "",
      price: "",
      stock: "",
      image: imgSrc,
      category: [],
    });
  
    useEffect(() => {
      setErrors(formValidations(product));
    }, [product]);
  
    useEffect(() => {
      dispatch(getAllCategories());
    }, [dispatch]);
  
    const categories = useSelector((state) => state.categoriesReducer.categories);
  
    useEffect(() => {
      if (id) {
        dispatch(getDetail(id));
      }
    }, [dispatch, id]);
  
    const detail = useSelector((state) => state.productReducer.details);
  
    useEffect(() => {
      if (Object.keys(detail).length > 0 && id) {
        setProduct({
          name: detail.name,
          description: detail.description,
          price: detail.price,
          stock: detail.stock,
          image: detail.image,
          category: detail.category || [],
        });
      }
    }, [detail, id]);
  
    const cloudinaryUpload = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", imgFile);
      formData.append("upload_preset", "petelegant");
  
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/petelegant/image/upload",
          formData
        );
        setProduct({ ...product, image: response.data.url });
        console.log("todo ok");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleSubmit = async () => {
      if (Object.keys(errors).length === 0) {
        let axiosConfig = configAxios();
  
        if (id) {
          try {
            let response = await axios.put(
              `${BASEURL}/products/${id}`,
              product,
              axiosConfig
            );
            setMsg(response.data);
            Swal.fire({
              title: "Product updated",
              icon: "success",
              confirmButtonText: "Cool",
            });
          } catch (error) {
            setMsg(error);
          }
        } else {
          try {
            let response = await axios.post(
              `${BASEURL}/products`,
              product,
              axiosConfig
            );
            setMsg(response.data);
            Swal.fire({
              title: "Product added to the store",
              icon: "success",
              confirmButtonText: "Cool",
            });
          } catch (error) {
            setMsg(error);
          }
        }
        setProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          image: imgSrc,
          category: [],
        });
        router.push("/dashboard/products");
      }
    };
  
    const previewFile = (e) => {
      const file = e.target.files[0];
      setImgFile(file);
      const reader = new FileReader();
  
      reader.onload = function () {
        setImgSrc(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === "category") {
        if (product.category.includes(e.target.id)) {
          setProduct({
            ...product,
            category: product.category.filter((cs) => {
              return cs !== e.target.id;
            }),
          });
        } else {
          let newCategory = product.category.concat(e.target.id);
          setProduct({ ...product, category: newCategory });
        }
      } else if (e.target.name === "stock" || e.target.name === "price") {
        setProduct({ ...product, [e.target.name]: Number(e.target.value) });
      } else {
        setProduct({ ...product, [e.target.name]: e.target.value });
      }
    };
  
    const isInProduct = (id) => {
      if (product.category.includes(id)) {
        return true;
      } else return false;
    };
  
    return (
      <>
        {detail && (
          <Stack h={"auto"} px={"2rem"} bgColor={"#eceff1"}>
            {console.log(product)}
            {id ? (
              <Heading
                color={"#1884BE"}
                fontWeight={"bold"}
                fontSize={"3rem"}
                p={"1rem"}
                textAlign={"center"}
              >
                Edit product
              </Heading>
            ) : (
              <Heading
                color={"#1884BE"}
                fontWeight={"bold"}
                fontSize={"3rem"}
                p={"1rem"}
                textAlign={"center"}
              >
                New product
              </Heading>
            )}
  
            <SimpleGrid columns={2} spacing={10} alignItems={"center"}>
              <FormControl>
                <Stack justifyContent={"space-between"} h={"auto"} mb={"3rem"}>
                  <Stack bgColor={"white"} boxShadow="xl" p={"1rem"}>
                    <FormControl isRequired>
                      <FormLabel>Product Name:</FormLabel>
                      <Input
                        name="name"
                        type={"text"}
                        onChange={handleChange}
                        value={product.name}
                      ></Input>
                      {errors.name && <Text color={"red"}>{errors.name}</Text>}
                    </FormControl>
                  </Stack>
  
                  <Stack bgColor={"white"} boxShadow="xl" p={"1rem"}>
                    <FormControl isRequired>
                      <FormLabel>Description:</FormLabel>
                      <Textarea
                        name="description"
                        onChange={handleChange}
                        value={product.description}
                      ></Textarea>
                    </FormControl>
                    {errors.description && (
                      <Text color={"red"}>{errors.description}</Text>
                    )}
                  </Stack>
  
                  <Stack bgColor={"white"} boxShadow="xl" p={"1rem"}>
                    <FormControl isRequired>
                      <FormLabel>Category:</FormLabel>
                      <Box>
                        {categories.map((cs, idx) => {
                          return (
                            <Checkbox
                              key={cs._id}
                              m={".3rem"}
                              id={cs._id}
                              value={product.category[idx]}
                              isChecked={isInProduct(cs._id)}
                              name={"category"}
                              onChange={(e) => handleChange(e)}
                            >
                              {cs.name}
                            </Checkbox>
                          );
                        })}
                      </Box>
                    </FormControl>
  
                    {errors.category && (
                      <Text color={"red"}>{errors.category}</Text>
                    )}
                  </Stack>
  
                  <SimpleGrid
                    bgColor={"white"}
                    boxShadow="xl"
                    p={"1rem"}
                    columns={3}
                    spacing={6}
                  >
                    <Stack>
                      <FormControl isRequired>
                        <FormLabel>Price:</FormLabel>
                        <Input
                          name="price"
                          onChange={handleChange}
                          type={"number"}
                          value={product.price}
                        ></Input>
                      </FormControl>
  
                      {errors.price && <Text color={"red"}>{errors.price}</Text>}
                    </Stack>
                    <Stack>
                      <FormControl>
                        <FormLabel>Stock:</FormLabel>
                        <Input
                          name="stock"
                          onChange={handleChange}
                          type={"number"}
                          value={product.stock}
                        ></Input>
                      </FormControl>
                    </Stack>
                  </SimpleGrid>
                  <Stack bgColor={"white"} boxShadow="xl" p={"1rem"}>
                    <FormControl isRequired>
                      <FormLabel>Image:</FormLabel>
                      <Flex>
                        <Input
                          type="file"
                          onChange={previewFile}
                          border={"none"}
                        ></Input>
  
                        <Button
                          bgColor={"#1884BE"}
                          borderRadius={"none"}
                          boxShadow="xl"
                          color={"white"}
                          fontSize={"1rem"}
                          onClick={cloudinaryUpload}
                          isDisabled={imgSrc ? false : true}
                          _hover={{
                            background: "white",
                            color: "#1884BE",
                          }}
                        >
                          Save
                        </Button>
                      </Flex>
                    </FormControl>
  
                    {errors.image && <Text color={"red"}>{errors.image}</Text>}
                  </Stack>
                  <Button
                    bgColor={"#1884BE"}
                    borderRadius={"none"}
                    boxShadow="xl"
                    color={"white"}
                    fontSize={"1.5rem"}
                    onClick={handleSubmit}
                    isDisabled={Object.keys(errors).length === 0 ? false : true}
                    _hover={{
                      background: "white",
                      color: "#1884BE",
                    }}
                  >
                    Upload
                  </Button>
                </Stack>
              </FormControl>
              <Center
                alignItems={"center"}
                bgColor={"white"}
                maxW={"2000"}
                h={"80vh"}
                p={"1rem"}
                boxShadow="xl"
              >
                <Image
                  maxW={"40vw"}
                  maxH={"75vh"}
                  src={product.image}
                  fallbackSrc={"/Logo.png"}
                  alt="Image preview..."
                />
              </Center>
            </SimpleGrid>
          </Stack>
        )}
      </>
    );
  }